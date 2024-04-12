import mongoose from "mongoose";

const merchantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  panNumber: {
    type: String,
    required: true,
    unique: true,
  },

  panVerification: {
    status: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
    verificationResult: {
      type: String,
    },
  },
});

const Merchant = mongoose.model("Merchant", merchantSchema);

export default Merchant;
