const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Admin Pagee",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log("redirecting you to deeezzzznuts");
  products.push({ title: req.body.title });
  res.redirect("/");
  console.log(req.body);
};

exports.getProducts = (req, res, next) => {
  console.log("Talking to Daksh rn");

  //console.log("nom nom......");
  res.render("shop", {
    prods: products,
    pageTitle: "Shop page",
    path: "/",
  });
};
