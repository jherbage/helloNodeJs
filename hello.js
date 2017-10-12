var os = require('os');

var psTree = require('ps-tree');

var kill = function (pid, signal, callback) {
    signal   = signal || 'SIGKILL';
    callback = callback || function () {};
    var killTree = true;
    if(killTree) {
        psTree(pid, function (err, children) {
            [pid].concat(
                children.map(function (p) {
                    return p.PID;
                })
            ).forEach(function (tpid) {
                try { process.kill(tpid, signal) }
                catch (ex) { }
            });
            callback();
        });
    } else {
        try { process.kill(pid, signal) }
        catch (ex) { }
        callback();
    }
};

function sayHello(request, response) {
  var name = os.hostname();
  response.send("Running on server " + name + "!");
}

function stress(request,response) {
  var seconds=request.query.seconds ? parseInt(request.query.seconds) * 1000 : 10000
  var exec = require('child_process').exec;
  child=exec('cat /dev/zero > /dev/null', function(error, stdout, stderr) {
});

  end = function(proc) {
    kill(proc.pid);
    response.send("CPU maxed for "+seconds+"ms");
  };
 
  setTimeout(end, seconds, child);
    
}

var express=require('express');
var app = express();
app.get('/', sayHello);
app.get('/stress',stress);


var server = app.listen(process.argv.length > 2 &&  parseInt(Number(process.argv[2])) == process.argv[2] && parseInt(process.argv[2]) < 65535 && parseInt(process.argv[2]) > 1024 ? parseInt(process.argv[2]) : 3000);
app.use(express.static('public'));
