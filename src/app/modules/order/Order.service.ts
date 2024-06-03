
import { Types } from "mongoose";
import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

// For create order

const createOrderIntoDB = async(order:Order) =>{
const result = await OrderModel.create(order)
return result;
}


export const OrderService = {
    createOrderIntoDB
}