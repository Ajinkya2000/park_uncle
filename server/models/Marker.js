const mongoose = require("mongoose");

const markerSchema = new mongoose.Schema(
  {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'User ID is required']
    },
    latitude: {
      type: Number,
      required: [true, 'Latitude is Required'],
    },
    longitude: {
      type: Number,
      required: [true, 'Longitude is required'],
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    rate: {
      type: Number,
      required: [true, 'Rate is Required'],
    },
    numberOfCars: {
      type: Number,
      default: 0
    },
    numberOfBikes: {
      type: Number,
      default: 0
    },
    booked: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

module.exports = Marker = mongoose.model("marker", markerSchema);
