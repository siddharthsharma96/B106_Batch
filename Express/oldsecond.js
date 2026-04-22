const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

// middleware
// Callback function that has access to the request and response
//  object and the next function in the application’s request-response cycle.
//  The next function is a function in the Express router which, when invoked,
// executes the middleware succeeding the current middleware.
app.use((req, res, next) => {
  const now = new Date();
  req.requestTimeOfHit = now.toLocaleString();
  next();
});

const restaurantData = JSON.parse(fs.readFileSync("./Restaurant.json"));

// CRUD
// C: Create :POST
// R: Read :GET
// U: Update: Put and Patch
// D: delete : Delete

// controllers
const getAllRestaurants = (req, res) => {
  res.status(200).json({
    status: "Success",
    length: restaurantData.length,
    timeOfHit: req.requestTimeOfHit,
    data: restaurantData,
  });
};

const getRestaurant = (req, res) => {
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

const createRestaurant = (req, res) => {
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

const updateRestaurant = (req, res) => {
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

const deleteRestaurant = (req, res) => {
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

// routes
// 1. Api Endpoint
// 2. callback function with two parameter:req and res
// app.get("/api/v1/restaurant", getAllRestaurants);

// app.get("/api/v1/restaurant/:id", getRestaurant);

// app.post("/api/v1/restaurant", createRestaurant);
// app.patch("/api/v1/restaurant/:id", updateRestaurant);

// app.delete("/api/v1/restaurant/:id", deleteRestaurant);

const restaurnatRouter = express.Router();
restaurnatRouter.route("/").get(getAllRestaurants).post(createRestaurant);
restaurnatRouter
  .route("/:id")
  .get(getRestaurant)
  .patch(updateRestaurant)
  .delete(deleteRestaurant);

app.use("/api/v1/restaurant", restaurnatRouter);
app.listen(8000, () => {
  console.log("Server started on port no 8000");
});
