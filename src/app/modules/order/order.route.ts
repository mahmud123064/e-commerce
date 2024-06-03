import express from "express";
import { OrderController } from "./order.controller";



const router = express.Router()

// create route
router.post('/create-order', OrderController.createOrder);

//Get route
router.get('/', OrderController.getAllOrder)

// get order by email
router.get('/orders',OrderController.getOrderByEmail)

export const OrderRoute = router;