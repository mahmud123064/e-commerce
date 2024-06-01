import { Request, Response } from "express";
import { ProductServices } from "./product.service";

// create product
const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    console.log(productData);
    // return product;

    // It's call from service
    const result = await ProductServices.createProductIntoDB(productData);

    // send response to user
    res.status(200).json({
      success: true,
      message: "Product created Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//get product

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductFromDB();

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProductController = {
  createProduct,
  getAllProduct
};
