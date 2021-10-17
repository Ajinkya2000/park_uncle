const mongoose = require("mongoose");

const markerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User ID is required"],
    },
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    latitude: {
      type: Number,
      required: [true, "Latitude is Required"],
    },
    longitude: {
      type: Number,
      required: [true, "Longitude is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    rate: {
      type: Number,
      required: [true, "Rate is Required"],
    },
    booked: {
      type: Boolean,
      default: false,
    },
    clientId: {
      type: String,
      default: ''
    }
  },
  { timestamps: true }
);

module.exports = Marker = mongoose.model("marker", markerSchema);
