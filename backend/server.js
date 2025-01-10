const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db.js");

dotenv.config({ path: "./.env" });

connectDb();

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json("Hello.");
});

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
