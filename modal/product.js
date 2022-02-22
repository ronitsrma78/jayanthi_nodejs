// define Schema for products Collection

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: Number,

      unique: true,

      required: [true, "Required field"],
    },

    productName: {
      type: String,
    },

    productCode: {
      type: String,
    },

    description: {
      type: String,
    },

    price: {
      type: Number,
    },

    rating: {
      type: Number,
    },

    manufacturer: {
      type: String,
    },

    osType: {
      type: String,
    },
  },

  {
    timestamps: {
      createdAt: true,

      updatedAt: true,
    },
  }
);

module.exports = mongoose.model("Product", productSchema);
