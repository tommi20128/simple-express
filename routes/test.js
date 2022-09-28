var express = require('express');
var router = express.Router();

router.get('/',function(request, response){
    response.send('Get pyyntö tullut');
    console.log('Get pyyntö tullut');
});

router.get('/second', function(request, response){
    response.send("endpoint = test/second");
    console.log("endpoint = test/second");
});

router.get('/third/:fname?',function(request,response){
    let fn=request.params.fname;
    response.send("Terve " +fn);
});

router.post('/',function(request, response){
    let data=request.body;
    let fn=request.body.fname;
    response.send(data);
});

module.exports = router;