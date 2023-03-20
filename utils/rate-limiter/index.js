const rateLimit = require('express-rate-limit');
const envConfig = process.env;

const rateLimiter = rateLimit({
    windowMs: process.env.RATE_LIMIT_TIMER*1000*60,
    max: process.env.RATE_LIMIT_MAX,
    message: "You have exceeded the total number of requests",
    headers: true
});

module.exports = {
    rateLimiter
}