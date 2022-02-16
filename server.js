// TODO
// import express
// create server
// listen server

const express = require("express");

const userRoutes = require("./userRoutes");

const app = express();

// use this middleware convert the string data comes from client  into json.
app.use(express.json());

app.use("/api/user", userRoutes);

//app.use("/api/product", productRoutes);

app.listen(4000, () => {
  console.log("server is up and running.");
});

//jayanthisella@gmail.com
