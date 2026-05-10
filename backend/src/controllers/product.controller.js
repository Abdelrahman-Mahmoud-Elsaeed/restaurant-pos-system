import Product_Schema from "../models/product.model.js";
import sendResponse from "../utils/sendResponse.js";

export const getAllproducts = async (req, res) => {
  const products = await Product_Schema.find();

  if (!products) {
    return sendResponse(res, 200, "there is no products");
  }

  return sendResponse(res, 200, "get all products successfully", {
    products,
  });
};

export const getproductbyid = async (req, res) => {
  const product = await Product_Schema.findById(req.params.id);
  if (!product) {
    return sendResponse(res, 404, "product not found ");
  }

  return sendResponse(res, 200, "get product successfully", { product });
};

export const updateProduct = async (req, res) => {
  const product = await Product_Schema.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  if (!product) {
    return sendResponse(res, 404, "product not found ");
  }
  return sendResponse(res, 200, "update product successfully", { product });
};

export const createOrder = async (req, res) => {
  const product = await Product_Schema.create({ ...req.body });
  return sendResponse(res, 200, "create product successfully", {
    product,
  });
};

export const deleteProduct = async (req, res) => {
  const product = await Product_Schema.findByIdAndDelete(req.params.id);
  if (!product) {
    return sendResponse(res, 404, "product not found ");
  }
  return sendResponse(res, 200, "deleted product successfully", {
    product,
  });
};
