var Downloadv4 =require('express').Router();

Downloadv4.get('/file', function(req, res){
  var file = __dirname + './../src/script/images/imgres.png';
  res.download(file); // Set disposition and send it.
});

module.exports =Downloadv4