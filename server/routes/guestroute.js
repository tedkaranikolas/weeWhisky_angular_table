var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/scotchDB';

//begin query to scotchDB
router.post('/queryOut', function (req, res){
  console.log('Biggles is heading to the DB bar with his buddies ' + req.body.keyword + ' ' + ' ' + req.body.region + ' ' + ' ' + req.body.scotch_type);
  var queriedScotch = [];
  pg.connect(connectionString, function(err, client, done){
    var scotchQuery = client.query( "SELECT * FROM whisky WHERE palate::text ILIKE '%" + req.body.keyword + "%' OR whisky_type = ' + req.body.whisky_type + ' OR region = ' + req.body.region'");
    scotchQuery.on('row', function(row){
      queriedScotch.push(row);
    });
    scotchQuery.on('end', function(){
      console.log(queriedScotch);
      return res.json(queriedScotch);
    });
  });//end scotchDB connectionString
});//end queryOut POST

module.exports = router;
