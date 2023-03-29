const Book = require("./model");

// Add a new book
const addBook = async (req, res) => {
  try {
    // Create a new book with data from the request body
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
    });

    // Send a success response with the new book data
    res.status(201).json({ message: "success", newBook: book });
  } catch (error) {
    // Send an error response if book creation fails
    console.log(error);
    const errorResponse = {
      errorMessage: error.message,
      error: error,
    };
    res.status(501).json(errorResponse);
  }
};

// Get all books
const getAllBooks = async (req, res) => {
  try {
    // Find all books
    const allBooks = await Book.findAll();

    // Send a success response with all books data
    res.status(200).json({ message: "success", books: allBooks });
  } catch (error) {
    // Send an error response if fetching books fails
    console.log(error);
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

// Update a book
const updateBook = async (req, res) => {
  try {
    // Update a book with the given title and updateKey and updateValue from the request body
    const updatedBook = await Book.update(
      { [req.body.updateKey]: req.body.updateValue },
      { where: { title: req.body.title } }
    );

    // Send a success response with the updated book data
    res.status(204).json({ message: "success", updatedBook });
  } catch (error) {
    // Send an error response if updating book fails
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  try {
    // Delete a book with the given title
    const result = await Book.destroy({ where: { title: req.body.title } });

    // Send a success response with the result of the delete operation
    res.status(201).json({ message: "success", result: result });
  } catch (error) {
    // Send an error response if deleting book fails
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

// Get a single book by title
const getSingleBookByTitle = async (req, res) => {
  try {
    // Find a book with the given title
    const book = await Book.findOne({ where: { title: req.params.title } });

    // Send a success response with the book data
    res.status(200).json({ message: "success", book: book });
  } catch (error) {
    // Send an error response if fetching book fails
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

module.exports = {
  addBook,
  getAllBooks,
  updateBook,
  deleteBook,
  getSingleBookByTitle,
};
