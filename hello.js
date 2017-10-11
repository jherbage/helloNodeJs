var os = require('os');

function sayHello(request, response) {
  var name = os.hostname();
  response.send("Running on server " + name + "!");
}

var express=require('express');
var app = express();
app.get('/', sayHello);
var server = app.listen(process.argv.length > 2 &&  parseInt(Number(process.argv[2])) == process.argv[2] && parseInt(process.argv[2]) < 65535 && parseInt(process.argv[2]) > 1024 ? parseInt(process.argv[2]) : 3000);
app.use(express.static('public'));
