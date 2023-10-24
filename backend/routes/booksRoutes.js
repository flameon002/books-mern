import express from "express"

import { Book } from "../models/booksModel.js"


const router = express.Router()


// create book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.autor || !req.body.publishedYear) {
      return res.status(400).send({
        message: "Send all required fields: title, autor, publish year",
      });
    }
    const newBook = {
      title: req.body.title,
      autor: req.body.autor,
      publishedYear: req.body.publishedYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});
// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
// Get one book
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
// Update book
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.autor || !req.body.publishedYear) {
      return res.status(400).send({
        message: "Send all required fields: title, autor, publish year",
      });
    }
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    return res.status(200).send({ message: "Book succesfully updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
// Delete one book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    console.log(book);
    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    return res.status(200).send({ message: "Book delete succesfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router