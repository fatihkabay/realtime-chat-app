const express = require("express");
const { connectToDb, getDb } = require("./index");

const app = express();

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("app listening on port 3000");
    });
    db = getDb();
  }
});

app.get("/api", (req, res) => {
  let user = [];
  db.collection("user")
    .find()
    .sort({ username: -1 })
    .forEach((users) => user.push(users))
    .then(() => {
      res.status(200).json(user);
    })
    .catch(() => {
      res.status(500).json({ hata: "Not found data" });
    });
});

app.post("/api", (req, res) => {
  const user = req.body;

  db.collection("user")
    .insertOne(user)
    .then((sonuc) => {
      res.status(201).json(sonuc);
    })
    .catch(err => {
      res.status(500).json({ hata: "Did not add data" });
    });
});
