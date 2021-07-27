// express is sufficient, http is not required
const express = require('express');

const app = express();

// the first URL will take all inputs
app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

// the first path
app.use('/hello', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello World!</h1>');
});

// if no path is specified
app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello, this is our default page</h1>');
});

app.listen(3000);
