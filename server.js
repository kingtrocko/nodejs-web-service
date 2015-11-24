var express     = require('express');
var app         = express();
var bodyparser  = require('body-parser');

var routes      = require('./routes');

app.set('port', (process.env.PORT || 3000));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded( {extended: false}));

app.use('/', routes);


app.listen(app.get('port'), function(){
  console.log('Node server is running on port', app.get('port'));
});
