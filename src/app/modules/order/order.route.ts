import express from "express";
import { OrderController } from "./order.controller";



const router = express.Router()

// create route

router.post('/create-order', OrderController.createOrder)



export const OrderRoute = router;