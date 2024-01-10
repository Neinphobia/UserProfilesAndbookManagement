
const mongoose = require("mongoose");

const favBookSchema = new mongoose.Schema({
    //not required optionally can be added:
  title: { type: String },
  author: { type: String },
  genre: { type: String },
  favoritedBy:{ type:String },
  bookId:{ type:String},
  userId: {type:String},

});
const favBookModel = mongoose.model("Favorite Books", favBookSchema);
module.exports = favBookModel;
