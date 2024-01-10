const bookModel = require("../models/bookModel");
const userModel = require('../models/userModel');

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

  //check the creedit for favoriting
  if (user.favCreditLeft <= 0) {
    throw new Error("Not enough credits left!");
  }

  if (book.favoritedBy.includes(userId)) {
    throw new Error("Book already favorited by user!");
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

const getFavoritedBooks = async () => {
  const result = await bookModel.find({ favoritedBy: { $exists: true, $ne: [] } });
  return result;
};



module.exports = {
  getBooks,
  createBook,
  updateBook,
  getFavoritedBooks,
};
