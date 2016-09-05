var APIv2 =require('express').Router();

APIv2.get('/name',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.send({"result":true,"count":2});
});

module.exports =APIv2