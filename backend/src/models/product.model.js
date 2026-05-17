import mongoose from "mongoose";


const Product_Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    stock: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    tag: {
      text: {
        type: String,
        default: null,
      },

      type: {
        type: String,
        enum: ["popular", "new", "sale", "featured","spicy","warning"],
        default: null,
      },
    },
  },
  {
    timestamps: true,
  }
);



const model_Product = mongoose.model("Products", Product_Schema);

export default model_Product;
