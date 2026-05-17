import mongoose from "mongoose";

const order_item = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    main: {
      type: String,
      required: true,
      trim: true,
    },

    sub: [
      {
        type: String,
        trim: true,
      },
    ],

    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { _id: false }
);

const Orderschema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      default: null,
    },

    place: {
      type: String,
      enum: ["DINE-IN", "TAKEAWAY", "DELIVERY"],
      required: true,
    },

    table: {
      type: String,
      default: null,
    },

    time: {
      type: String,
      required: true,
    },

    totalamount: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: [
        "pending",
        "preparing",
        "ready",
        "paid",
        "completed",
        "cancelled",
      ],
      default: "pending",
    },

    allorder_items: [order_item],
  },
  { timestamps: true }
);

Orderschema.pre("save", function (next) {
  this.totalamount = this.allorder_items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  next();
});

const model_order = mongoose.model("Orders", Orderschema);

export default model_order;