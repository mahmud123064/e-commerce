import { Request, Response } from "express";
import { OrderService } from "./Order.service";
import { orderValidationSchema } from "./order.validation";

// create order
const createOrder = async (req: Request, res: Response) => {
    try {
        const { order: orderData } = req.body;

        console.log(orderData);

        // zod validation

        const zodParsedData = orderValidationSchema.parse(orderData);

        const result = await OrderService.createOrderIntoDB(zodParsedData);

        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
            data: error,
        });
    }
};

// get order

const getAllOrder = async (req: Request, res: Response) => {
    const { email } = req.query;

    try {
        if (email) {
            const result = await OrderService.getOrderByEmailFromDB(
                email as string
            );

            res.status(200).json({
                success: true,
                message: "Orders fetched successfully for user email!",
                data: result,
            });
        } else {
            const result = await OrderService.getOrderFromDB();

            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result,
            });
        }
    } catch (err) {
        console.log(err);
    }
};

// Get order by email

const getOrderByEmail = async (req: Request, res: Response) => {
    try {
    } catch (err) {
        console.log(err);
    }
};

export const OrderController = {
    createOrder,
    getAllOrder,
    getOrderByEmail,
};
