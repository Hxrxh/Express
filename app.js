const express = require("express");
const productRouter = require("./routes/products");
const categoryRouter = require("./routes/categories");
const bookRouter = require("./routes/books");
const coursesRouter = require("./routes/courses");
const studentsRouter = require("./routes/students");
const homeRouter = require("./routes/Home");
const app = express();
//logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});
//Routing using express router
app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/courses", coursesRouter);
app.use("/students", studentsRouter);
app.use("/", homeRouter);
//Library books endpoint
app.use("/books", bookRouter);

//wildpoint
app.use((req, res) => {
  res.status(400).send("Page not found");
});
app.listen(4000, () => {
  console.log(`server is running on local host 4000`);
});
