import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

//post
router.post("/", ProductController.createProduct);

//get
// router.get("/", ProductController.getAllProduct);

// Search product
router.get('/',ProductController.searchProduct);

//get single product
router.get("/:productId", ProductController.getSingleProduct);

//update product
router.put('/:productId',ProductController.updateProduct);

//delete product
router.delete("/:productId", ProductController.deleteProduct);




export const ProductRoutes = router;
