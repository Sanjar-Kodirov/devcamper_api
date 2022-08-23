const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");

// load env
dotenv.config({ path: "./config/config.env" });

// load models
const Bootcamp = require("./models/Bootcamp");

// connect to database
