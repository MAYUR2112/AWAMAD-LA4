const express = require("express");
const path = require("path");
const app = express();

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/photo', function (err, db) {
  if (err) throw err

  db.collection('users').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})

// Database
//var mongo = require('mongodb');
//var monk = require('monk');
//var db = monk('localhost:27017/nodephoto');


// Make our db accessible to our router
//app.use(function(req,res,next){
//  req.db = db;
//  next();
//});





app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname + '/views'))

app.set('view engine', "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

app.post('/contactus', (req, res) => {
    console.log(req.body);
    res.send('Thank you!s')
})


const PORT = 3333 || process.env.PORT;
app.listen(PORT, () => console.log("Listening on 3333"));
