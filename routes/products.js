const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Here is the list of all products.");
});
router.post("/", (req, res, next) => {
  res.send("A new category has been created.");
});

module.exports = router;
