var APIv1 =require('express').Router();

APIv1.get('/name',function(req,res){

	console.log('app.use(\'/api/v1\',APIv1)');
  res.setHeader('Content-Type', 'application/json');
    res.send({"result":true,"count":1});
});

module.exports =APIv1