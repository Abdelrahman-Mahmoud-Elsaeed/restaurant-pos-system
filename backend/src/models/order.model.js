import mongoose from "mongoose";

const order_item = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
},{ _id: false });

const Orderschema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    totalamount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "paid", "completed", "cancelled"],
      default: "pending",
    },
    allorder_items: [order_item],
  },
  { timestamps: true },
);

Orderschema.pre("save", function () {
  this.totalamount = this.allorder_items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
});

const model_order = mongoose.model("Orders", Orderschema);
export default model_order;
