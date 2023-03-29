// Import the Router module from Express
const { Router } = require("express");

// Create a new router instance
const bookRouter = Router();

// Import the controller functions
const {
  addBook,
  getAllBooks,
  updateBook,
  deleteBook,
  getSingleBookByTitle,
} = require("./controllers");

// Define routes for handling book-related requests
bookRouter.post("/books/addbook", addBook);
bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.get("/books/getbook/:title", getSingleBookByTitle);
bookRouter.put("/books/updatebook", updateBook);
bookRouter.delete("/books/deletebook", deleteBook);

// Export the bookRouter for use in other modules
module.exports = bookRouter;
