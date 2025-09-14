const express = require("express");
const router = express.Router();
const studentsData = [
  { id: 1, name: "Alice" },

  { id: 2, name: "Bob" },

  { id: 3, name: "Charlie" },
];
router.get("/", (req, res) => {
  const studentName = studentsData
    .map((u) => {
      return u.name;
    })
    .join(",");
  console.log(studentName);
  res.status(200).send(`Students: ${studentName}`);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const studentFound = studentsData.find((c) => c.id == id);
  if (!studentFound) {
    return res.status(404).send("Student not found.");
  } else {
    res.send(`Student: ${studentFound.name}`);
  }
});

module.exports = router;
