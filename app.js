const express = require("express");

const app = express();
app.get("/welcome/:username", (req, res, next) => {
  const username = req.params.username;
  const role = req.query.role;
  res.send(`Welcome ${username},your role is ${role}`);
});

app.listen(4000, () => {
  console.log(`server is running on local host 4000`);
});
