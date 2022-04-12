// const express = require("express");
import express from "express";
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//load modules
import taskRouter from "./src/routers/taskRouter.js";

app.use("/api/v1/task", taskRouter);

app.use("/", (req, res) => {
  res.json({ message: "You have reached to the api of not to do application" });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is runing http://localhost:8000`);
});
