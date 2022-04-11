// const express = require("express");
import express from "express";
const app = express();
const PORT = 8000;

// Api end points
app.get("/api/v1/", (req, res) => {
  res.json({ message: "welcome to the API" });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is runing http://localhost:8000`);
});

app.use("/", (req, res) => {
  const person = {
    firstName: "Prem",
    lastName: "AAA",
  };

  res.json({ message: "You have reached to the api of not to do application" });
});
