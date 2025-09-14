const getCartForUser = (req, res) => {
  const id = parseInt(req.params.id);
  res.send(`Fetching cart for user with ID: ${id}`);
};

const addProductToCart = (req, res) => {
  const id = parseInt(req.params.userId);
  res.send(`Adding product to cart for user with ID: ${id}`);
};

module.exports = {
  getCartForUser,
  addProductToCart,
};
