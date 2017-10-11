var os = require('os');

function sayHello(request, response) {
  var name = os.hostname();
  response.send("Running on server " + name + "\n");
}

var express=require('express');
var app = express();
app.get('/', sayHello);
var port = process.argv.length > 2 &&  parseInt(Number(process.argv[2])) == process.argv[2] && parseInt(process.argv[2]) < 65535 && parseInt(process.argv[2]) > 1024 ? parseInt(process.argv[2]) : 3000;
ver addr = process.argv.length > 3 : process.argv[3] ? '127.0.0.1'
var server = app.listen(port, addr);
app.use(express.static('public'));
