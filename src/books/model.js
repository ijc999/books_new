// Import the DataTypes module from Sequelize
const { DataTypes } = require("sequelize");

// Import the database connection instance
const connection = require("../db/connection");

// Define a new Sequelize model called "Book"
const Book = connection.define("Book", {
  // Define a column called "title" with a data type of STRING
  title: {
    type: DataTypes.STRING,
    allowNull: false, // Disallow null values for this column
    unique: true, // Ensure that this column's values are unique
  },
  // Define a column called "author" with a data type of STRING
  author: {
    type: DataTypes.STRING,
  },
  // Define a column called "genre" with a data type of STRING
  genre: {
    type: DataTypes.STRING,
  },
});

// Export the Book model
module.exports = Book;
