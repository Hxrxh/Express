const productServices = require("../Services/productService");

const getProducts = (req, res) => {
  const message = productServices.getProducts();
  res.send(message);
};

const postProducts = (req, res) => {
  const message = productServices.postProducts();
  res.send(message);
};
const getProductsById = (req, res) => {
  const message = productServices.getProductsById(req.params);
  res.send(message);
};

module.exports = {
  getProducts,
  postProducts,
  getProductsById,
};
