const getProducts = () => {
  return "Fetching all products.";
};

const postProducts = () => {
  return "Adding a new product.";
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
