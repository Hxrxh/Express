const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Here is the list of all categories.");
});
router.post("/", (req, res, next) => {
  res.send("A new product has been added.");
});

module.exports = router;
