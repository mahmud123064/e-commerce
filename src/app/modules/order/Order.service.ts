import { Types } from "mongoose";
import { Order } from "./order.interface";
import { OrderModel } from "./order.model";
import { ProductModel } from "../product/product.model";
import { Product } from "../product/product.interface";

// For create order
const createOrderIntoDB = async (orderData: Order) => {
    const session = await OrderModel.startSession();
    console.log(orderData);
    
    session.startTransaction();
    try {
  
        const product:any = await ProductModel.findById(
            orderData.productId
        ).session(session);

       
        if (product.inventory.quantity < orderData.quantity) {
            throw new Error("Insufficient quantity available in inventory");
        }

        product.inventory.quantity -= orderData.quantity;
        product.inventory.inStock = product.inventory.quantity > 0;
        await product.save({ session });

        const order = new OrderModel(orderData);
        await order.save({ session });

        await session.commitTransaction();
        return order;
    } catch (error) {
        await session.abortTransaction();
        throw error;
    } finally {
        session.endSession();
    }
};

// For get order
const getOrderFromDB = async () => {
    const result = await OrderModel.find().exec();
    return result;
};

// Get order by email

const getOrderByEmailFromDB = async (email: string) => {
    const result = await OrderModel.find({ email }).exec();
    return result;
};

export const OrderService = {
    createOrderIntoDB,
    getOrderFromDB,
    getOrderByEmailFromDB,
};
