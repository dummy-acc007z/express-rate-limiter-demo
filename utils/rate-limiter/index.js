const rateLimit = require('express-rate-limit');
const envConfig = process.env;

const rateLimiter = rateLimit({
    windowMs: process.env.timerValRateLimitInMinutes*1000*60,
    max: process.env.maxCountRateLimit,
    message: "You have exceeded the total number of requests",
    headers: true
});

module.exports = {
    rateLimiter
}