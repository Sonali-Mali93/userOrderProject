const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, unique: true,require: true },
    email: { type: String,unique: true, require: true },
    createdAt: { type: String, require: true },
    updatedAt: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
