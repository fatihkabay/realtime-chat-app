const express = require('express');
const { connectToDb, getDb } = require('./index')

const app = express();

let db;

connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log('app listening on port 3000');
        })
        db = getDb();
    }
})

app.get('/api', (req, res) => {
    let users = [];
    db.collection('user')
       .find()
       .sort({username: -1})
       .forEach(user=> users.push(user))
       .then(() => {
        res.status(200).json(users)
       }).catch(() => {
        res.status(500).json({hata: 'Not found data'})
       })
})