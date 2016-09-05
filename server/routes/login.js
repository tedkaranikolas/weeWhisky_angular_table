var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

// Handles login form POST from index.html
router.post('/',
    passport.authenticate('local', {
        successRedirect: '/router',
        failureRedirect: '/'
    })
);
//handles index file separately
//also catches any other request not explicitly matched elsewhere
router.get('/', function(req, res) {
  //res.sendFile(path.resolve('public/index.html')); //had views after public
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
