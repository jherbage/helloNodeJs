var os = require('os');

function sayHello(request, response) {
  var name = os.hostname();
  response.send("Running on server " + name + "!");
}

var express=require('express');
var app = express();
app.get('/', sayHello);
var server = app.listen(3000);
app.use(express.static('public'));
