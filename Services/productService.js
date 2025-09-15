const path = require("path");

const getProducts = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "View", "product.html"));
};

const postProducts = (data) => {
  return { value: data.productName };
};
const getProductsById = (req) => {
  const id = parseInt(req.id);
  return `Fetching product with ID: ${id}`;
};

module.exports = {
  getProducts,
  postProducts,
  getProductsById,
};
