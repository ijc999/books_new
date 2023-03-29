// Import the Router module from Express
const { Router } = require("express");

// Create a new router instance
const authorRouter = Router();

// Import the controller functions for handling author routes
const { addAuthor, getAuthorAndBooks } = require("./controllers");

// Define a route for adding a new author
authorRouter.post("/authors/addauthor", addAuthor);

// Define a route for getting an author and their books by name
authorRouter.get("/authors/getauthorandbooks/:author", getAuthorAndBooks);

// Export the author router for use in other parts of the application
module.exports = authorRouter;