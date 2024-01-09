const bookModel = require("../models/bookModel");

const getBooks = async () => {
  try {
    const result = await bookModel.find();
    return result;
  } catch (error) {
    throw new Error("err: Cant get the books...");
  }
};
const createBook = async (title, author, genre) => {
  //will implement error handling
  const createdBook = new bookModel({
    title,
    author,
    genre,
  });
  const result = await createBook.save();
  return result;
};

module.exports = {
  getBooks,
  createBook,
};
