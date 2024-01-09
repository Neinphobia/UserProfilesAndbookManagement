const booksService = require("./booksService");

const getBooks = async (req, res) => {
  const result = await booksService.getBooks();
  return res.json(result);
};
const createBook = async (req, res) => {
  const { title, author, genre } = req.body;

  const result = await booksService.createBook(title, author, genre);
  return res.json(result);
};

module.exports = {
  getBooks,
  createBook,
};
