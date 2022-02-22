const express = require("express");

const mongoose = require("mongoose");

//const bodyparser = require('body-parser');

//const myReqLogger = require('./Utilities/requestLogger');

// const route = require('./Routes/routing');

const app = express();

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("connected"));

// app.use(bodyparser.json());

// app.use(myReqLogger);

// app.use('/user', require('./Routes/routing'));

app.use("/product", require("./productsRoutes.js"));

// app.use('/', route);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//http://localhost:3000/product/product  GET
