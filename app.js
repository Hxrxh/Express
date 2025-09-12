const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(
    "Server is up and running on port 3000! Ready to handle requests."
  );
  next();
});
app.use((req, res, next) => {
  res.send("<h1>My name is Harsh</h1>");
});
app.listen(3000);
