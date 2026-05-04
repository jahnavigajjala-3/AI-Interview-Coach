require("dotenv").config();
const express = require("express")
const app =express ()
const connectDB = require("./config/db");

const start = async () => {
  try {
    await connectDB();
    app.listen(5000, () => console.log("Server started"));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
start();

