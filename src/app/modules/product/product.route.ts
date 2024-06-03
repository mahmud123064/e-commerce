import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

//post
router.post("/create-product", ProductController.createProduct);

//get
router.get("/", ProductController.getAllProduct);

//get single product
router.get("/:productId", ProductController.getSingleProduct);

//delete product
router.delete("/:productId", ProductController.deleteProduct);

//update product
router.put('/:productId',ProductController.updateProduct);



export const ProductRoutes = router;
