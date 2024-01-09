const bookModel = require("../models/bookModel");

const getBooks = async () => {
  const result = await bookModel.find();
  return result;
};
const createBook = async (title, author, genre) => {
  //will implement error handling
  const createdBook = new bookModel({
    title,
    author,
    genre,
  });
  const result = await createdBook.save();
  return result;
};

module.exports = {
  getBooks,
  createBook,
};
