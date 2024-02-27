const express = require('express');
const app = express();
const slowDown = require("express-slow-down");

//1. rate limit
const rateLimit = require("express-rate-limit");


const limiter = rateLimit({
    windowMs: 0.5 * 60 * 1000, // 15 minutes
    max: 10 // limit each IP to 100 requests per windowMs
});

//2. slow down
const speedLimiter = slowDown({
    windowMs: 0.5 * 60 * 1000, 
    delayAfter: 3, 
    delayMs: (hits) => hits * 1000 // begin adding 500ms of delay per request above 100:
});

app.use(limiter);
app.use(speedLimiter);

app.get('/', (req, res) => {
    res.send('Hello World');
})





app.listen(3000, () => {
    console.log('Server is running on port 3000');
})