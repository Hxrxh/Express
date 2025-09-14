const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
router.get("/", productController.getProducts);

router.post("/", productController.postProducts);
router.get("/:id", productController.getProductsById);
module.exports = router;
