const express = require("express");
const productRouter = require("./routes/products");
const categoryRouter = require("./routes/categories");
const app = express();
//logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});
//Routing using express router
app.use("/products", productRouter);
app.use("/categories", categoryRouter);

app.listen(4000, () => {
  console.log(`server is running on local host 4000`);
});
