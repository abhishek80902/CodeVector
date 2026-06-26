const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    category: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

productSchema.index({
  updatedAt: -1,
  _id: -1,
});

productSchema.index({
  category: 1,
  updatedAt: -1,
  _id: -1,
});

module.exports = mongoose.model("Product", productSchema);