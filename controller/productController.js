const productServices = require("../Services/productService");

const getProducts = (req, res) => productServices.getProducts(req, res);

const postProducts = (req, res) => {
  const data = req.body;
  const result = productServices.postProducts(data);

  res.json(result);
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
