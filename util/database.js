const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
  MongoClient.connect(
    "mongodb+srv://notgod:Passwordisok%4001@cluster0.sbojoze.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((result) => {
      console.log("connected");
      _db = result.db("test");
      cb();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDB = () => {
  if (_db) return _db;

  throw new Error("Database error");
};

module.exports = {
  mongoConnect,
  getDB,
};
