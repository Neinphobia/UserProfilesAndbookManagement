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

const updateBook = async (req, res) => {
  const id = req.params.id;
  const { favoritedBy } = req.body;
  const userId = req.body.userid;
  try {
    const result = await booksService.updateBook(id, favoritedBy, userI);
    const updatedResult = {
      updated: true,
      whatsUpdated: result,
    };
    return res.json(updatedResult);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getFavoritedBooks = async (req, res) => {
  const result = await booksService.getFavoritedBooks();
  return res.json(result);
};
module.exports = {
  getBooks,
  createBook,
  updateBook,
  getFavoritedBooks
};
