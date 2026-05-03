const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Restaurant must have a name"],
      unique: [true, "Restaurant name must be unique"],
    },
    cloudinaryImageId: { type: String },
    locality: { type: String },
    areaName: { type: String },
    costForTwo: { type: String },
    cuisines: [String],
    avgRating: { type: Number },
    parentId: { type: String },
    avgRatingString: { type: String },
    totalRatingsString: { type: String },
    nextCloseTime: { type: String },
    opened: {
      type: Boolean,
      default: true,
      enum: {
        values: [true, false],
        message: "Values should be true or false only",
      },
    },
  },
  {
    timestamps: true,
  },
);

const Restaurants = mongoose.model("restaurants", restaurantSchema);
module.exports = Restaurants;
