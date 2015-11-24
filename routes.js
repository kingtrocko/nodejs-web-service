var express   = require('express');
var router    = express.Router();

router.post('/sort', function(req, res){
  if(req.body.array && req.body.order){
    var myArray = req.body.array;

    if(req.body.order === 'desc'){
      myArray.sort(function(a, b){return b-a});
    }else{
      myArray.sort(function(a, b){return a-b});
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.json({ array: myArray, sortedOnDate: new Date().toISOString()});
  }else{
    res.status(400);
    res.json({error_description: "expected an 'array' of numbers in JSON format and/or the 'order' property."});
  }
});


module.exports = router;
