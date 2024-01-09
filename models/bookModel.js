// Book.js
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  // Other book-related fields
});
const bookModel = mongoose.model("Book", bookSchema);
module.exports = bookModel;
