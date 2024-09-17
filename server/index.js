require("dotenv").config();
const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(config.connectionString);

const User = require("./models/users.model");

const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.listen(8000);
module.exports = app;
