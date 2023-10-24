import express from "express";
import { PORT } from "./config.js";
import { conectDB } from "./db/db.js";
import cors from "cors";
import booksRoutes from "./routes/booksRoutes.js"



const app = express();
app.use(express.json());
conectDB();

app.use(cors({
  origin:"http://localhost:3000",
  methods: ['GET', "PUT", "POST", "DELETE"],
  allowedHeaders:["Content-type"]
}));

app.use("/books",booksRoutes )



app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
