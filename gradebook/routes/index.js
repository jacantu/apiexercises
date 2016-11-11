var express = require('express');
var router = express.Router();

//array that holds student objects
var gradebook = [];

/* GET users listing. */
router.get('/grade', function(req, res, next) {
  res.json(gradebook);
});

//Post to gradebook
router.post('/grade', function(req, res, next) {

  //student object
  var item = {
    class:req.body.class,
    student:req.body.student,
    assignment:req.body.assignment,
    grade:req.body.grade,
  }
  //pushes student object to gradebook array
  gradebook.push(item);
  res.sendStatus(200);
});

//Gets average
router.get('/average', function(req, res, next) {
  var sum = 0;
  var count = 0;

  //Gets through every student in gradebook
  gradebook.forEach(function(student){
    count ++;
    sum += Number(student['grade']);
  });

  var avg = sum/count;
  res.json(avg);
});

module.exports = router;
