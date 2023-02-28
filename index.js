const express = require('express');
const { rateLimiter } = require('./utils/rate-limiter');
require('dotenv').config();

const envConfig = process.env;

const app = express();

// Setting trust proxies
app.set('trust proxy', envConfig.numberOfProxies);

// API without rate limiter
app.get('/ip', (req, res) =>
    res.send({
        proxyCount: envConfig.numberOfProxies,
        ip: req.ip
    })
);

// Adding rate limiter
app.use(rateLimiter);

// API with rate limter
app.get('/ip2', (req, res) =>
    res.send({
        proxyCount: envConfig.numberOfProxies,
        ip: req.ip
    })
);

app.listen(envConfig.PORT);
console.log('SERVER STARTED AT', envConfig.PORT);

