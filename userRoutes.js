//TODO

// import express

// create router object

// create GET user route

// create POST user route

// export router

const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  // /api/user/login
  console.log(req.body);

  if (req.body.username == "john" && req.body.password === "123") {
    return res.status(200).send("Successfully logged in");
  } else {
    return res.status(404).send("Login failure");
  }
});

router.get("/logout", (req, res) => {
  // /api/user/logout
  res.send("<h1>Successfully Logout</h1>");
});

module.exports = router;

// http://localhost:4000/api/user/login
