const express = require("express");
const mongoose = require("mongoose");
const app = express(); // destructure of code
app.use(express.json());
const authRoutes = require("./routes/authRoutes");

//route
// req which client requested
// res which server give after request

// app.get("/", (req, res) => {
//   res.send("Hello Node Api");
// });

/* The code `app.post("/product", async (req, res) => { ... })` is defining a route for handling HTTP
POST requests to the "/product" endpoint. */
// app.post("/product", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json({ product, message: "Product Created successfully" });
//   } catch (error) {
//     res.send(500).json({ message: error.message });
//   }
// });

/* The code `app.get("/product", async (req, res) => { ... })` is defining a route for handling HTTP
GET requests to the "/product" endpoint. */
// app.get("/product", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.send(500).json({ message: error.message });
//   }
// });

/* The code `app.get("/product/:id", async (req, res) => { ... })` is defining a route for handling
HTTP GET requests to the "/product/:id" endpoint. */

// app.get("/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const product = await Product.findById(id);
//     if (!product) {
//       return res
//         .status(404)
//         .json({ message: `Product with ID ${id} not found` });
//     } else {
//       res.status(200).json(product);
//     }
//   } catch (error) {
//     res.send(500).json({ message: error.message });
//   }
// });

/* The code `app.put("/product/:id", async (req, res) => { ... })` is defining a route for handling
HTTP PUT requests to the "/product/:id" endpoint. */
// app.put("/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);

//     if (!product) {
//       return res
//         .status(404)
//         .json({ message: `Product with ID ${id} not found` });
//     } else {
//       const updatedProduct = await Product.findById(id);
//       return res.status(200).json({
//         product: updatedProduct,
//         message: "Product updated successfully",
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// });

// app.delete("/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res
//         .status(404)
//         .json({ message: `Product with ID ${id} not found` });
//     } else {
//       const updatedProduct = await Product.findById(id);
//       return res.status(200).json({
//         message: "Product deleted successfully",
//       });
//     }
//   } catch (error) {
//     res.send(500).json({ message: error.message });
//   }
// });

app.use("/", authRoutes);

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
