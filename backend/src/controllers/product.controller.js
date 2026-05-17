import Product from "../models/product.model.js";
import sendResponse from "../utils/sendResponse.js";

export const getAllproducts = async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });

  if (!products.length) {
    return sendResponse(res, 200, "there are no products", {
      products: [],
    });
  }

  return sendResponse(res, 200, "get all products successfully", {
    products,
  });
};

export const getproductbyid = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return sendResponse(res, 404, "product not found");
  }

  return sendResponse(res, 200, "get product successfully", {
    product,
  });
};

export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  return sendResponse(res, 201, "create product successfully", {
    product,
  });
};

export const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!product) {
    return sendResponse(res, 404, "product not found");
  }

  return sendResponse(res, 200, "update product successfully", {
    product,
  });
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return sendResponse(res, 404, "product not found");
  }

  return sendResponse(res, 200, "deleted product successfully", {
    product,
  });
};