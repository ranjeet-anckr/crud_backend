const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const app = express(); // destructure of code

// to use json as middleware to understand the data in middle ware

app.use(express.json());
//route
// req which client requested
// res which server give after request

app.get("/", (req, res) => {
  res.send("Hello Node Api");
});
app.get("/signup", (req, res) => {
  res.send("Hello Node ss  Api");
});

app.post("/product", (req, res) => {
  try {
  } catch (error) {
    console.log(error.message);
    res.send(500).json({ message: error.message });
  }
  const data = req.body;
  data.message = "Product Created successfully";
  res.send(data);
});

// for connection to our data base then start our server

mongoose
  .connect("mongodb+srv://admin:admin@cluster0.tehhfti.mongodb.net/")
  .then(() => {
    console.log("Connected!");
    app.listen(4000, () => {
      console.log("Node Server is running on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
