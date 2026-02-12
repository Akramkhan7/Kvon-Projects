const { Book } = require("../models/book.model");

const handleBookStoreController = async (req, res) => {
  try {
    const body = req.body;

    if (
      !body.BookName ||
      !body.BookTitle ||
      !body.Author ||
      !body.SellingPrice ||
      !body.PublishDate
    ) {
      return res.status(400).json({ message: "All data required" });
    }

    const bookAdd = await Book.insertOne(body);
    if (bookAdd) {
      res.status(201).json({
        message: "Book added successfully",
        success : true,
        Id:bookAdd?._id,
      });
    }
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = { handleBookStoreController };
