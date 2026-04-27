const fs = require("fs");

const restaurantData = JSON.parse(fs.readFileSync("./Restaurant.json"));

exports.getAllRestaurants = (req, res) => {
  res.status(200).json({
    status: "Success",
    length: restaurantData.length,
    timeOfHit: req.requestTimeOfHit,
    data: restaurantData,
  });
};

exports.getRestaurant = (req, res) => {
  const id = req.params.id;
  const restaurant = restaurantData.find((el) => el.id == id);
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
};

exports.createRestaurant = (req, res) => {
  const newResturantID = restaurantData.length;
  const newRestaurant = Object.assign({ id: newResturantID }, req.body);
  restaurantData.push(newRestaurant);
  fs.writeFile("./Restaurant.json", JSON.stringify(restaurantData), (err) => {
    if (err) {
      res.status(400).json({
        status: "Failed",
        timeOfHit: req.requestTimeOfHit,
        messgae: "Unable to add restaurant data",
        err: err,
      });
    }
    res.status(201).json({
      status: "Success",
      message: "Restaurant data added successfully",
      timeOfHit: req.requestTimeOfHit,
      data: newRestaurant,
    });
  });
};

exports.updateRestaurant = (req, res) => {
  const id = req.params.id;
  const restaurant = restaurantData.find((r) => r.id == id);
  if (!restaurant) {
    return res.status(404).json({
      status: "Failed",
      timeOfHit: req.requestTimeOfHit,
      msg: "Restaurant data not found for the given id",
    });
  }
  res.status(200).json({
    status: "Success",
    timeOfHit: req.requestTimeOfHit,
    msg: "Restaurant data updated successfully",
  });
};

exports.deleteRestaurant = (req, res) => {
  const id = req.params.id;
  const restaurant = restaurantData.find((r) => r.id == id);
  if (!restaurant) {
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
};
