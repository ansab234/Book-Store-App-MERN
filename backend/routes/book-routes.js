const express = require("express");
const router = express.Router();
const getAllBooksController = require("../controllers/books-controller");

router.get("/", getAllBooksController.getAllBooks);
router.get("/:id", getAllBooksController.getBookById);
router.post("/", getAllBooksController.addBook);
router.put("/:id", getAllBooksController.updateBook);
router.delete("/:id", getAllBooksController.deleteBook);

module.exports = router;
