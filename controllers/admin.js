const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Admin Pagee",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log("redirecting you to deeezzzznuts");
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect("/");
  console.log(req.body);
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(function (products) {
    console.log(products);

    //console.log("nom nom......");
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin page",
      path: "/admin/products",
    });
  });
};
