const bookModel = require("../models/bookModel");
const usermodel = require('../models/userModel');

const getBooks = async () => {
  const result = await bookModel.find();
  return result;
};
const createBook = async (title, author, genre, createdBy) => {
  //will implement error handling
  const createdBook = new bookModel({
    title,
    author,
    genre,
    createdBy,
  });
  const result = await createdBook.save();
  return result;
};
const updateBook = async (id, favoritedBy, userId) => {
  const book = await bookModel.findById(id);
  if (!book) {
    throw new Error("Book not found!");
  }

  const user = await userModel.findById(userId);
  if (!user) {
    throw new Error("User not found!");
  }

  if (user.favCreditLeft <= 0) {
    throw new Error("Not enough credits left!");
  }

  const updatedBook = await bookModel.findByIdAndUpdate(
    id,
    {
      favoritedBy: favoritedBy,
    },
    {
      new: true,
    }
  );

  if (!updatedBook) {
    throw new Error("Update failed!");
  }

  const updatedUser = await userModel.findByIdAndUpdate(
    userId,
    {
      favCreditLeft: user.favCreditLeft - 1,
    },
    {
      new: true,
    }
  );

  if (!updatedUser) {
    throw new Error("Update failed!");
  }

  return { updatedBook, updatedUser };
};


module.exports = {
  getBooks,
  createBook,
  updateBook,
};
