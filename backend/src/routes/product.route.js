import express from "express";
const router = express.Router();

import asyncHandler from "../utils/asyncHandlar.js";

import {
  getAllproducts,
  getproductbyid,
  updateProduct,
  deleteProduct,
  createOrder,
} from "../controllers/product.controller.js";

router.get("/",asyncHandler(getAllproducts));
router.get("/:id", asyncHandler(getproductbyid));
router.post("/", asyncHandler(createOrder));
router.patch("/:id", asyncHandler(updateProduct));
router.delete("/:id", asyncHandler(deleteProduct));

export default router;
