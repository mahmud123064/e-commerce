import express, { Application, Request, Response } from "express";
import cors from 'cors'
import { ProductRoutes } from "./app/modules/product/product.route";
import { OrderRoute } from "./app/modules/order/order.route";
const app: Application = express();
const port = 5000;

// Middleware

app.use(express.json());
app.use(cors());

// Application routes

//for product
app.use('/api/products', ProductRoutes)

//For order
app.use('/api/orders', OrderRoute)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Mahmud!");
});


export default app;
