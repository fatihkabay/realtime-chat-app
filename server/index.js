const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect("mongodb://my-user-db:27017")
    .then((client) => {
        dbConnection = client.db()
        return cb;
    }).catch((err) => {
        console.log(err);
        return cb(err);
    });
  },
    getDb: () => dbConnection
}