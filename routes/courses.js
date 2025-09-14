const express = require("express");
const router = express.Router();
const coursesData = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" },
];
router.get("/", (req, res) => {
  const coursesName = coursesData
    .map((u) => {
      return u.name;
    })
    .join(",");
  console.log(coursesName);
  res.status(200).send(`Course: ${coursesName}`);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const courseFound = coursesData.find((c) => c.id == id);
  if (!courseFound) {
    return res.status(404).send("Course not found.");
  } else {
    res.send(
      `Course: ${courseFound.name}, Description: ${courseFound.description} `
    );
  }
});

module.exports = router;
