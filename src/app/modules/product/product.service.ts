import { Types } from "mongoose";
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

// For single product

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};
//delete
const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.deleteOne({ _id: id });
  return result;
};

//Update
const updateProductFromDB = async (id: string, updateData: Partial<Product>) => {
  const result = await ProductModel.updateOne({ _id: id },updateData);
  return result;
};

//Search 
const searchProductsInDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i'); // 'i' makes it case-insensitive
  const result = await ProductModel.find({
    $or: [
      { name: { $regex: regex } },
      { description: { $regex: regex } },
      { tags: { $in: [regex] } }
    ]
  });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
  updateProductFromDB,
  searchProductsInDB
};
