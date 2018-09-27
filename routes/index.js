var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});


router.get('/create-random-zombie', function(req, res, next) {
    res.render('create/create-random-zombie');
}); 

router.get('/login-metamask', function(req,res, next) {
    res.render('check/login-metamask');
});

router.get('/choose-ropsten', function(req, res, next) {
   res.render('check/choose-ropsten');
});

router.get('/zombie-attack', function (req, res, next) { 
    res.render('create/zombie-attack');
});

router.get('/zombie-details', function(req, res, next) {
    res.render('zombie-details/zombie-details');
});


module.exports = router;
