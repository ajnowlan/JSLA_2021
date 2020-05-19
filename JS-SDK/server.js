const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();
const port           = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

var uri = "mongodb://username:password@demo-store-shard-00-00.hbwxn.mongodb.net:27017,demo-store-shard-00-01.hbwxn.mongodb.net:27017,demo-store-shard-00-02.hbwxn.mongodb.net:27017/test?ssl=true&replicaSet=Demo-Store-shard-0&authSource=admin&retryWrites=true&w=majority";

MongoClient.connect(uri, function(err, client) {
  const mydb = client.db("note-api");

  require('./app/routes')(app, mydb);

  app.listen(port, () => {
    console.log('API on port# ' + port);
  });   

});

