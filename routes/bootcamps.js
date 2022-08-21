const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  req.status(200).json({ success: true, message: "Data" });
});

router.get("/:id", (req, res) => {
  req
    .status(200)
    .json({ success: true, message: `single data ${req.params.id}` });
});

router.post("/", (req, res) => {
  req.status(200).json({ success: true, message: `Data post` });
});

router.put("/:id", (req, res) => {
  req.status(200).json({ success: true, message: `Data ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  req.status(200).json({ success: true, message: `Data ${req.params.id}` });
});
module.exports = router;
