var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/esim1',function(request, response){
  response.send("Endpoint /index/esim1");
  console.log("esim1");
});

module.exports = router;
