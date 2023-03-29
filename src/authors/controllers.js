// Import models
const Author = require("./model");
const Book = require("../books/model");

// Add a new author
const createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);

    res.status(201).json({ message: "Author created successfully", author });
  } catch (error) {
    res.status(400).json({ errorMessage: error.message });
  }
};

// Retrieve an author and their books
const getAuthorAndBooks = async (req, res) => {
  try {
    const author = await Author.findOne({
      where: { authorName: req.params.author },
      include: Book,
    });

    if (!author) {
      res.status(404).json({ message: "Author not found" });
    } else {
      res.status(200).json({ message: "Author retrieved successfully", author });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Export functions
module.exports = {
  createAuthor,
  getAuthorAndBooks,
};
