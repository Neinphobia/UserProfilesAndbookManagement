const booksService = require("./booksService");

const getBooks = async (req, res) => {
  const result = await booksService.getBooks();
  return res.json(result);
};
const createBook = async (req, res) => {
  const { title, author, genre, createdBy } = req.body;

  const result = await booksService.createBook(title, author, genre, createdBy);
  return res.json(result);
};

module.exports = {
  getBooks,
  createBook,
};
