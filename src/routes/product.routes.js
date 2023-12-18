import express from "express";
import {getProduct,addNewProduct,getProductById,updateProduct,deleteProduct} from "../controllers/product.controller.js";

const router=express.Router()

/* These lines of code are defining the routes for handling HTTP requests related to products. */
router.get("/product",getProduct)
router.post("/product",addNewProduct)
router.get("/product/:id",getProductById)
router.put("/product/:id",updateProduct)
router.delete("/product/:id",deleteProduct)

export default router;