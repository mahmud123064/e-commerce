import { Request, Response } from "express";
import { OrderService } from "./Order.service";

// create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const {order: orderData} = req.body;

    console.log(orderData);
    
    const result = await OrderService.createOrderIntoDB(orderData);

    res.status(200).json({
        success:true,
        message:'Order created successfully!',
        data:result
    })
  } catch (err) {
    console.log(err);
  }
};


export const OrderController = {
    createOrder
}