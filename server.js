const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const Signup = require("./models/signupModal");
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

/* The code `app.post("/product", async (req, res) => { ... })` is defining a route for handling HTTP
POST requests to the "/product" endpoint. */
app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ product, message: "Product Created successfully" });
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
});

/* The code `app.get("/product", async (req, res) => { ... })` is defining a route for handling HTTP
GET requests to the "/product" endpoint. */
app.get("/product", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch {
    console.log(error.message);
    res.send(500).json({ message: error.message });
  }
});

app.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch {
    console.log(error.message);
    res.send(500).json({ message: error.message });
  }
});
/* The code `app.post("/signup", async (req, res) => { ... })` is defining a route for handling HTTP
POST requests to the "/signup" endpoint. */
app.post("/signup", async (req, res) => {
  try {
    const signup = await Signup.create(req.body);
    res.status(200).json({ signup, message: "Account Created successfully" });
  } catch (error) {
    console.log(error.message);
    res.send(500).json({ message: error.message });
  }
});

app.get("/login", (req, res) => {
  console.log(req.body);
  res.send(req.body);
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
