const productServices = require("../Services/productService");
const { sendErrorResponse, sendResponse } = require("../utils/Response");

const getProducts = (req, res) => productServices.getProducts(req, res);

const postProducts = (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      const err = new Error("Product name is required");
      err.statusCode = 404;
      throw err;
    }
    const result = productServices.postProducts(data);

    res.json(result);
  } catch (err) {
    return sendErrorResponse(res, err);
  }
};
const getProductsById = (req, res) => {
  const id = parseInt(req.params.id);

  try {
    if (id > 10) {
      let err = new Error("User not found");
      err.statusCode = 404;
      throw err;
    }
    const message = productServices.getProductsById(req.params);

    return sendResponse(res, message, 200);
  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

module.exports = {
  getProducts,
  postProducts,
  getProductsById,
};
