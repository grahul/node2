var GROUPv3 =require('express').Router();
GROUPv3.route('/group')
  // .all(function(req, res) {
  // 	console.log('always all execute ')
  // 	res.next()
  //  })
  .get(function(req, res) {
  	res.setHeader('Content-Type', 'application/json');
    res.send({"result":"get","count":2});
   })
  .post(function(req, res) {
  	res.setHeader('Content-Type', 'application/json');
    res.send({"result":"post","count":2});
   })
.put(function(req, res) {
  	res.setHeader('Content-Type', 'application/json');
    res.send({"result":"put","count":2});
   })
.delete(function(req, res) {
  	res.setHeader('Content-Type', 'application/json');
    res.send({"result":"delete","count":2});
   })

module.exports = GROUPv3;