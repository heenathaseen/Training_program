// first step is to import the required modules
const http = require('http');
const express = require('express');

// how to create a new app using express
const app = express();

// basic syntax to run an app
app.use((req, res, next) => {
    console.log('In the Express middleware!');
    // Allows the request to continue to the next middleware in line
    next(); 
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer(app);

server.listen(3000);
