import Orders from "../models/order.model.js";
import sendResponse from "../utils/sendResponse.js";

export const getAllorders = async (req, res) => {
  const allOrders = await Orders.find().sort({ createdAt: -1 });

  if (!allOrders.length) {
    return sendResponse(res, 200, "there are no orders", {
      orders: [],
    });
  }

  return sendResponse(res, 200, "get all orders successfully", {
    orders: allOrders,
  });
};

export const getorderbyid = async (req, res) => {
  const order = await Orders.findById(req.params.id);

  if (!order) {
    return sendResponse(res, 404, "order not found");
  }

  return sendResponse(res, 200, "get order successfully", {
    order,
  });
};

export const createOrder = async (req, res) => {
  const order = await Orders.create(req.body);

  return sendResponse(res, 201, "create order successfully", {
    order,
  });
};

export const updateOrder = async (req, res) => {
  const order = await Orders.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!order) {
    return sendResponse(res, 404, "order not found");
  }

  return sendResponse(res, 200, "update order successfully", {
    order,
  });
};

export const updateOrderStatus = async (req, res) => {
  const order = await Orders.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!order) {
    return sendResponse(res, 404, "order not found");
  }

  return sendResponse(res, 200, "update order status successfully", {
    order,
  });
};

export const deleteOrder = async (req, res) => {
  const order = await Orders.findByIdAndDelete(req.params.id);

  if (!order) {
    return sendResponse(res, 404, "order not found");
  }

  return sendResponse(res, 200, "deleted order successfully", {
    order,
  });
};