var Formatterv5 =require('express').Router();

Formatterv5.get('/formate', function(req, res){
 res.format({
  text: function(){
    res.send('text');
  },

  html: function(){
    res.send('<strong>html</strong>');
  },

  json: function(){
    res.send({ message: 'hey' });
  }
});
});

module.exports =Formatterv5