const getProducts = (req, res) => {
  res.send("Fetching all products.");
};

const postProducts = (req, res) => {
  res.send("Adding a new product.");
};
const getProductsById = (req, res) => {
  const id = parseInt(req.params.id);
  res.send(`Fetching product with ID: ${id}`);
};

module.exports = {
  getProducts,
  postProducts,
  getProductsById,
};
