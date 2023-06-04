const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Admin Pagee",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log("redirecting you to deeezzzznuts");
  const product = new Product();
  product.save();
  res.redirect("/");
  console.log(req.body);
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  console.log(products);

  //console.log("nom nom......");
  res.render("shop", {
    prods: products,
    pageTitle: "Shop page",
    path: "/",
  });
};
