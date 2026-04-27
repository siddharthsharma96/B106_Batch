const express = require("express");
const RestaurantController = require("./../Controllers/RestaurantController");

const routes = express.Router();
routes
  .route("/")
  .get(RestaurantController.getAllRestaurants)
  .post(RestaurantController.createRestaurant);
routes
  .route("/:id")
  .get(RestaurantController.getRestaurant)
  .patch(RestaurantController.updateRestaurant)
  .delete(RestaurantController.deleteRestaurant);

module.exports = routes;
