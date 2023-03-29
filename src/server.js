// Importing required modules
require("dotenv").config();
const express = require("express");

// Defining port to listen on
const port = process.env.PORT || 5001;

// Importing models and routers
const Book = require("./books/model");
const Author = require("./authors/model");
const bookRouter = require("./books/routes");
const authorRouter = require("./authors/routes");

// Creating an instance of express app
const app = express();

// Setting up middleware to parse JSON requests
app.use(express.json());

// Defining relationships between Book and Author models
const syncTables = () => {
  Author.hasMany(Book);
  Book.belongsTo(Author);

  Book.sync({ alter: true });
  Author.sync({ alter: true });
};

// Setting up routes using the imported routers
app.use(bookRouter);
app.use(authorRouter);

// Setting up a health check route
app.get("/health", (req, res) =>
  res.status(200).json({ message: "API is working" })
);

// Starting the server
app.listen(port, () => {
  // Synchronizing the tables before starting the server
  syncTables();
  console.log(`Server is listening on port ${port}`);
});
