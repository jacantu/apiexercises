var express = require('express');
var router = express.Router();

//Array to hold objects
var camplist = [];

/* GET users listing. */
router.get('/campinglist', function(req, res, next) {
  res.json(camplist);
});

router.post('/campinglist', function(req, res, next) {
console.log(req.body);
  //Object that holds properties
  var item = {
    description:req.body.description,
    category:req.body.category,
    priority:req.body.priority,
  }

  camplist.push(item);
  res.sendStatus(200);
});

module.exports = router;
