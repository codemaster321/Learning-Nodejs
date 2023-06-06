const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Admin Pagee",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log("redirecting you to deeezzzznuts");
  const product = new Product(req.body.title, "this is me mario");
  product.save();
  res.redirect("/");
  console.log(req.body);
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(function (products) {
    console.log(products);

    //console.log("nom nom......");
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Shop page",
      path: "/",
    });
  });
};
