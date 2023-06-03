const express = require("express");
const path = require("path");

const router = express.Router();
const productData = require("../controllers/products");
router.get("/", productData.getProducts);

module.exports = router;
