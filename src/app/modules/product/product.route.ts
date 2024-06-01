import express from "express";
import { ProductController } from "./product.controller";


const router = express.Router()

//post
router.post('/create-product',ProductController.createProduct)

//get
router.get('/',ProductController.getAllProduct )

export const ProductRoutes = router;