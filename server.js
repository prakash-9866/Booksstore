const express = require('express');
const app = express();  
const cors = require("cors");
app.use(cors());
app.use(express.json());
let books = [
  { id: 1, title: "React Basics", author: "John" },
  { id: 2, title: "Node.js Guide", author: "David" }
];
app.get("/books", (req, res) => {
      res.json(books);
      });
app.post("/books", (req, res) => {
        const newBook = {
                id: books.length + 1,
                    ...req.body
  };

      books.push(newBook);
      res.json(newBook);
      });
app.listen(3000, () => {
      console.log("Server is running on port 3000");
      });