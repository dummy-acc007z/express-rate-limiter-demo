const express = require('express');
require('dotenv').config();

const { rateLimiter } = require('./utils/rate-limiter');

const envConfig = process.env;

const app = express();

// Setting trust proxies
app.set('trust proxy', envConfig.PROXY_COUNT);

// API without rate limiter
app.get('/ip', (req, res) =>
    res.send({
        proxyCount: envConfig.PROXY_COUNT,
        ip: req.ip
    })
);

app.get('/ip/:proxycount', (req, res) => {
    app.set('trust proxy', req.params.proxycount);
    res.send({
        proxyCount: req.params.proxycount,
        ip: req.ip
    })
});

// Adding rate limiter
app.use(rateLimiter);

// API with rate limter
app.get('/ip2', (req, res) =>
    res.send({
        proxyCount: envConfig.PROXY_COUNT,
        ip: req.ip
    })
);

app.get('/ip3', (req, res) =>
    res.send({
        proxyCount: envConfig.PROXY_COUNT,
        ip: req.ip
    })
);

app.listen(envConfig.PORT);
console.log('SERVER STARTED AT', envConfig.PORT);

