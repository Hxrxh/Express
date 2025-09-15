const express = require("express");
// const productRouter = require("./routes/products");
// const categoryRouter = require("./routes/categories");
// const bookRouter = require("./routes/books");
// const coursesRouter = require("./routes/courses");
// const studentsRouter = require("./routes/students");
// const homeRouter = require("./routes/Home");
const cartRouter = require("./routes/cartRoutes");
const userRouter = require("./routes/userRouts");
const productRouter = require("./routes/productRoutes");
const app = express();
//logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});
app.use(express.json());
//Routing using express routeruser
app.use("/cart", cartRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
// app.use("/products", productRouter);
// app.use("/categories", categoryRouter);
// app.use("/courses", coursesRouter);
// app.use("/students", studentsRouter);
// app.use("/", homeRouter);
// //Library books endpoint
// app.use("/books", bookRouter);

//making public folder static
app.use(express.static("Public"));
//wildpoint
app.use((req, res) => {
  res.status(400).send("Page not found");
});
app.listen(4000, () => {
  console.log(`server is running on local host 4000`);
});
