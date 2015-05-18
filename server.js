var express = require('express');
var app = express();


app.use(express.static(__dirname + '/app'));

app.set('port', process.env.PORT || 3000);

app.get('/blog', function (req, res) {
  res.send('Aqui deberian aparecer los estudiantes');
});

app.get('/users/signup', function(req, res){
   res.send('Sign Up');
});


app.get('/api/events', function (req, res) {
  res.json({estudiantes: {nombre: 'rene', apellido:'Polo'}});
});


app.listen(app.get('port'), function() {
      console.log('Express server listening on port ' + app.get('port'));
    });