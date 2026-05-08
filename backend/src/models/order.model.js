import mongoose from "mongoose";

const order_item = new mongoose.Schema({
  orderid: {
    type: String,
    required: true,
  },
  itemid: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Orderschema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    totalamount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    allorder_items: { order_item },
  },
  { timestamps: true },
);
const model_order = mongoose.model("Orders", Orderschema);
export default model_order;
