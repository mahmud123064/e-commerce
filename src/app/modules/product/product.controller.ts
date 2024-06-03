import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { z } from "zod";
import ProductValidationSchema from "./product.validation";

// create product
const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    console.log(productData);

    // using zod
    const zodParsedData = ProductValidationSchema.parse(productData);

    // It's call from service
    const result = await ProductServices.createProductIntoDB(zodParsedData);

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

//get single product
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    // console.log(productId);
    // return productId;

    const result = await ProductServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete product

const deleteProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await ProductServices.deleteProductFromDB(productId);

  try {
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
};
