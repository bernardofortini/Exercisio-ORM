const BooksService = require('../services/booksService');

const getAll = async (req, res) => {
  const books = await BooksService.getAll();

  res.status(200).json(books);
}

module.exports = {
  getAll,
};