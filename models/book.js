const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  description: String,
  image: String,
  infoLink: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;