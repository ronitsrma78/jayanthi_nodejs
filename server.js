// TODO
// import express
// create server
// listen server

const express = require("express");

const userRoutes = require("./userRoutes");

const app = express();

/**
 *  connect mongodb
 */

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

// use this middleware convert the string data comes from client  into json.
app.use(express.json());

app.use("/api/user", userRoutes);

//app.use("/api/product", productRoutes);

app.listen(4000, () => {
  console.log("server is up and running.");
});
