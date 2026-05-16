import orders from "../models/order.model.js";
import sendResponse from "../utils/sendResponse.js";

export const getAllorders = async (req, res) => {
  const orders = await orders.find();

  if (!orders) {
    return sendResponse(res, 200, "there is no orders");
  }

  return sendResponse(res, 200, "get all orders successfully", {
    orders,
  });
};

export const getorderbyid = async (req, res) => {
  const order = await orders.findById(req.params.id);
  if (!order) {
    return sendResponse(res, 404, "order not found ");
  }

  return sendResponse(res, 200, "get order successfully", { order });
};

export const updateOrder = async (req, res) => {
  const order = await orders.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!order) {
    return sendResponse(res, 404, "order not found ");
  }
  return sendResponse(res, 200, "update order successfully", { order });
};

export const updateOrderStatus = async (req, res) => {
  const order = await orders.findByIdAndUpdate(req.params.id, req.body.status, {
    new: true,
  });
  if (!order) {
    return sendResponse(res, 404, "order not found ");
  }
  return sendResponse(res, 200, "update order status successfully", {
    order,
  });
};

export const createOrder = async (req, res) => {
  const order = await orders.create({ ...req.body });
  return sendResponse(res, 200, "create order successfully", {
    order,
  });
};

export const deleteOrder = async (req, res) => {
  const order = await orders.findByIdAndDelete(req.params.id);
  if (!order) {
    return sendResponse(res, 404, "order not found ");
  }
  return sendResponse(res, 200, "deleted order successfully", {
    order,
  });
};
