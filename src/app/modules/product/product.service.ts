import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

//For create product
const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

// For get all product
const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
};
