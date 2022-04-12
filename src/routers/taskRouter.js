import express from "express";
const router = express.Router();

//replace the faketask
const fakeTasks = [];

// Api end points
router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "you made a get call",
    tasks: fakeTasks,
  });
});

router.post("/", (req, res) => {
  fakeTasks.push(req.body);

  res.json({
    status: "success",
    message: "you made a post call",
  });
});

router.delete("/", (req, res) => {
  res.json({ message: "you made a delete call" });
});

export default router;
