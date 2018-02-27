var fs = require('fs');
var readStream = fs.createReadStream('err.log');

var spawn = require('child_process').spawn;
var tail = spawn('tail', ['-f', 'err.log']);

tail.stdout.on('data', function (data) {
    console.log(`DATA : ${data}`);
});
