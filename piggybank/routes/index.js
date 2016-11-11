var express = require('express');
var router = express.Router();

var credits = [];
var debits = [];

/* GET users listing. */
router.get('/deposit', function(req, res, next) {
  res.json(credits);
});

//Post to credits
router.post('/deposit', function(req, res, next) {
  var amount = req.body.amount;
  var deposit = { amount: amount };
  credits.push(deposit);
  res.sendStatus(200);
});

router.get('/withdraw', function(req, res, next) {
  res.json(debits);
});

//Post to debits
router.post('/withdraw', function(req, res, next) {
  var amount = req.body.amount;
  var withdraw = { amount: amount };
  debits.push(withdraw);
  res.sendStatus(200);
});

//Get balance
router.get('/balance', function(req, res, next) {
  var balance = 0;
  var withdraw = 0;

  credits.forEach(function(transaction){
    balance += Number(transaction.amount);
  });
  debits.forEach(function(transaction){
    withdraw += Number(transaction.amount);
  });
  if (withdraw > 0){
    balance = balance - withdraw;
  }

  res.json(balance);
});


module.exports = router;
