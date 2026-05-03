const Restaurants = require("./../Models/RestaurantModel");

exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurants.find();

    res.status(200).json({
      status: "Success",
      length: restaurants.length,
      timeOfHit: req.requestTimeOfHit,
      data: restaurants,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      timeOfHit: req.requestTimeOfHit,
      message: "Error occurred while fetching restaurants",
      val: err,
    });
  }
};

exports.getRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurants.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        status: "Failed",
        timeOfHit: req.requestTimeOfHit,
        message: "Restaurant data not found for the given id",
      });
    }
    res.status(200).json({
      status: "Success",
      timeOfHit: req.requestTimeOfHit,
      data: restaurant,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      timeOfHit: req.requestTimeOfHit,
      message: "Error occurred while fetching restaurant",
      val: err.message,
    });
  }
};

exports.createRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurants.create(req.body);

    res.status(201).json({
      status: "Success",
      message: "Restaurant data added successfully",
      timeOfHit: req.requestTimeOfHit,
      data: restaurant,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      timeOfHit: req.requestTimeOfHit,
      message: "Error occurred while creating restaurant",
      val: err.message,
    });
  }
};

exports.updateRestaurant = async (req, res) => {
  try {
    const updateRestaurant = await Restaurants.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updateRestaurant) {
      return res.status(404).json({
        status: "Failed",
        timeOfHit: req.requestTimeOfHit,
        msg: "Restaurant data not found for the given id",
      });
    }
    res.status(201).json({
      status: "Success",
      timeOfHit: req.requestTimeOfHit,
      msg: "Restaurant data updated successfully",
      data: updateRestaurant,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      timeOfHit: req.requestTimeOfHit,
      message: "Error occurred while updating restaurant",
      val: err.message,
    });
  }
};

exports.deleteRestaurant = async (req, res) => {
  try {
    const deletedRestaurant = await Restaurants.findByIdAndDelete(
      req.params.id,
    );
    if (!deletedRestaurant) {
      return res.status(404).json({
        status: "Failed",
        timeOfHit: req.requestTimeOfHit,
        msg: "Restaurant data not found for the given id",
      });
    }
    res.status(204).json({
      status: "Success",
      timeOfHit: req.requestTimeOfHit,
      msg: "Restaurant data Deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      timeOfHit: req.requestTimeOfHit,
      message: "Error occurred while deleting restaurant",
      val: err.message,
    });
  }
};
