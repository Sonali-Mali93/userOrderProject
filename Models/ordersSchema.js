const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, require: true },
    email: { type: String, require: true },
    totalAmount: { type: String, require: true },
    createdAt: { type: String, require: true },
    updatedAt: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
