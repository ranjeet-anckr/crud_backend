import Product from "../models/product.models.js";
import mongoose from "mongoose";
import { Types } from "mongoose";
const { ObjectId } = Types;

const getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
};

const addNewProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ product, message: "Product Created successfully" });
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `Product with ID ${id} not found` });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res
        .status(404)
        .json({ message: `Product with ID ${id} not found` });
    } else {
      const updatedProduct = await Product.findById(id);
      return res.status(200).json({
        product: updatedProduct,
        message: "Product updated successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `Product with ID ${id} not found` });
    } else {
      const updatedProduct = await Product.findById(id);
      return res.status(200).json({
        message: "Product deleted successfully",
      });
    }
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
};
export {
  getProduct,
  addNewProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
