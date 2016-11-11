//Home inventory
var express = require('express');
var router = express.Router();

//Array to hold objects
var home = [];

/* GET users listing. */
router.get('/home', function(req, res, next) {
  res.json(home);
});

router.post('/home', function(req, res, next) {
console.log(req.body);
  //Object that holds properties
  var item = {
    room:req.body.room,
    description:req.body.description,
    value:req.body.value,
    category:req.body.category
  }

  home.push(item);
  res.sendStatus(200);
});


module.exports = router;
