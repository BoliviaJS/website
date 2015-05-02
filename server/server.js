var express = require('express');
var app = express();


app.use(express.static(__dirname + '../../app'));


app.get('/blog', function (req, res) {
  res.send('Aqui deberian aparecer los estudiantes');
});

app.get('/users/signup', function(req, res){
   res.send('Sign Up');
});


app.get('/api/events', function (req, res) {
  res.json({estudiantes: {nombre: 'rene', apellido:'Polo'}});
});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
