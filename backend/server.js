const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db.js");
const logger = require("./config/winston.js");

dotenv.config({ path: "./.env" });

connectDb();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Hello.");
});

app.listen(PORT, () => {
  logger.info(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
