import express, { Application, Request, Response } from "express";
import cors from 'cors'
import { ProductRoutes } from "./app/modules/product/product.route";
const app: Application = express();
const port = 5000;

// Middleware

app.use(express.json());
app.use(cors());

// Application routes

app.use('/api/products', ProductRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Mahmud!");
});


export default app;
