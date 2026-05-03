const app = require("./index");
const dotenv = require("dotenv");
dotenv.config({ path: "./.config.env" });
const mongoose = require("mongoose");
// console.log(process.env.DB_NAME, DB_NAME=mongodb+srv://siduser:0123456789@cluster0.r738axx.mongodb.net/);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log("DB Connection Failed", err);
  });

// console.log(process.env.A);

app.listen(process.env.PORT_NO, () => {
  console.log("Server started on port no ", process.env.PORT_NO);
});
