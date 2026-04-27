const express = require("express");
const app = express();
const restaurantRouter = require("./Routes/RestaurantRoutes");
const menuRouter = require("./Routes/MenuRoutes");
app.use(express.json());

app.use((req, res, next) => {
  const now = new Date();
  req.requestTimeOfHit = now.toLocaleString();
  next();
});

app.use("/api/v1/restaurant", restaurantRouter);
app.use("/api/v1/menu", menuRouter);
app.listen(8000, () => {
  console.log("Server started on port no 8000");
});
