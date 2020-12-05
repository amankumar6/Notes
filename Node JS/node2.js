// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);

const fs = require("fs");
let text = fs.readFileSync("fgh.txt","utf-8");
console.log(text);
