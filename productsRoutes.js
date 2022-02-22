const express = require("express");

const prodrouting = express.Router();

const productsController = require("./Controller/myProducts");

//Product

prodrouting.get("/product", productsController.getProducts);

prodrouting.post("/product", productsController.newProducts);

prodrouting.put("/product/:id", productsController.updateProducts);

prodrouting.delete("/product/:id", productsController.deleteProduct);

prodrouting.all("*", productsController.invalid);

module.exports = prodrouting;
