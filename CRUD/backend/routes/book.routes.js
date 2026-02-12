const express = require('express');
const { handleBookStoreController } = require('../controllers/book.controller');

const router = express.Router();

router.post("/addBook", handleBookStoreController);

module.exports = router;
