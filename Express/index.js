const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

const restaurantData = JSON.parse(fs.readFileSync("./Restaurant.json"));

// CRUD
// C: Create :POST
// R: Read :GET
// U: Update: Put and Patch
// D: delete : Delete

// 1. Api Endpoint
// 2. callback function with two parameter:req and res
app.get("/api/v1/restaurant", (req, res) => {
  res.status(200).json({
    status: "Success",
    length: restaurantData.length,
    data: restaurantData,
  });
});

app.get("/api/v1/restaurant/:id", (req, res) => {
  const id = req.params.id;
  const restaurant = restaurantData.find((el) => el.id == id);
  if (!restaurant) {
    return res.status(404).json({
      status: "Failed",
      message: "Restaurant data not found for the given id",
    });
  }
  res.status(200).json({
    status: "Success",
    data: restaurant,
  });
});

app.post("/api/v1/restaurant", (req, res) => {
  const newResturantID = restaurantData.length;
  const newRestaurant = Object.assign({ id: newResturantID }, req.body);
  restaurantData.push(newRestaurant);
  fs.writeFile("./Restaurant.json", JSON.stringify(restaurantData), (err) => {
    if (err) {
      res.status(400).json({
        status: "Failed",
        messgae: "Unable to add restaurant data",
        err: err,
      });
    }
    res.status(201).json({
      status: "Success",
      message: "Restaurant data added successfully",
      data: newRestaurant,
    });
  });
});

app.listen(8000, () => {
  console.log("Server started on port no 8000");
});
