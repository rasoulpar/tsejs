const express = require('express');
const fs = require('fs');
const inst_info = require('./app/ticker/ticker');
const pug = require('pug');

const compiledFunction = pug.compileFile('./app/view/index.pug');

const PORT = 8081;

let app = express();

app.get('/', (request, response) => {
    response.send(compiledFunction());
});

app.get('/tsejs/:ticker', async (request, response) => {
    let obj = await inst_info.download_fast_info(request.params);
    response.send(obj);
});

app.listen(PORT);
console.log(`TSE.js is running on port:${PORT}`);
exports = module.exports = app;