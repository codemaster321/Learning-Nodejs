const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(t, shiv = "haha") {
    this.title = t;
    this.shiv = shiv;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );

    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }

      console.log(this);
      products.push(this);
      console.log("products", products);

      fs.writeFile(p, JSON.stringify(products), (err) => console.log(err));
    });
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) cb([]); // passing empty array as an callback function to callback function

      cb(JSON.parse(fileContent)); // converting json to javascript object as an argument to callback function
    });
  }
};
