const bookModel = require("../models/bookModel");

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
const updateBook = async (id,favoritedBy) => {
  const result  = await bookModel.findByIdAndUpdate(
    id,
    {
      favoritedBy: favoritedBy
    },
    {
      new: true
    }

    );
    if (!result) {
      throw new Error("Update failed!");
    }
    return result;
}

module.exports = {
  getBooks,
  createBook,
  updateBook,
};
