import express from "express";
import { PORT } from "./config.js";
import { conectDB } from "./db/db.js";
import Book from "./models/booksModel.js";

const app = express();
app.use(express.json())
conectDB();

// create book
app.post("/book", async (req, res) => {
  try {
    if (!req.body.title || !req.body.autor || !req.body.publishedYear) {
      return res.status(400).send({
        message: "Send all required fields: title, autor, publish year",
      });
    }
    const newBook = new Book({
      title: req.body.title,
      autor: req.body.autor,
      publishedYear: req.body.publishedYear,
    });
    const book = await Book.create(newBook);
  } catch (error) {
    res.status(500).send({ message: error.mesage });
    console.log(error);
  }
});

// test route
app.get("/", (req, res) => {
  res.send("helo world");
});

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
