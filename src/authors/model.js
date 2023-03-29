// Import the DataTypes module from Sequelize
const { DataTypes } = require("sequelize");

// Import the database connection instance
const connection = require("../db/connection");

// Define a new Sequelize model called "Author"
const Author = connection.define("Author", {
  // Define a column called "authorName" with a data type of STRING
  authorName: {
    type: DataTypes.STRING,
  },
  // Define a column called "isAwesome" with a data type of BOOLEAN
  isAwesome: {
    type: DataTypes.BOOLEAN,
  },
});

// Export the Author model
module.exports = Author;