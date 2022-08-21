const express = require("express");
const app = express();
// route files
const bootcamps = require("./routes/bootcamps");

// load env vars
const port = process.env.PORT || 5000;
require("dotenv").config();

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
