const debug = require('debug')('app');
const express = require('express');

const router = require('./routers');

const app = express();

app.use((req, _, next) => {
    debug(req.url);
    next(); 
});

app.use(router);

module.exports = app;