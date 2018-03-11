'use strict';

const http = require('http');
const PORT = 3000;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    res.end('こんにちは');
}).listen(PORT);
