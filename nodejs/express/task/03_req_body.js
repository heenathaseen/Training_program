const express = require('express');
// this is older code you may encounter
//const bodyParser = require('body-parser');

const app = express();

// this is older code you may encounter
//app.use(bodyParser.urlencoded({extended: false}));

app.use(express.urlencoded({extended: false}))

// the first path
app.use('/hello', (req, res, next) => {
    console.log(req.body)
    res.send(`<h1>Hello ${req.body.firstName} &bnsp &bnsp &bnsp ${req.body.lastName} &bnsp &bnsp &bnsp  ${req.body.about}</h1>`);
  });
  
// if no path is specified
app.use('/', (req, res, next) => {
res.send(
    // '<form action="/hello" method="POST">\
    // <input type="text" name="firstName">\
    // <input type="text" name="lastName">\
    // <input type="text" name="about">\
    // <button type="submit">Go</button>\
    // </form>'
    '<form action="/hello" method="POST">\
    <input type="text" name="principal">\
    <input type="text" name="rate">\
    <input type="text" name="time">\
    <button type="submit">Simple Interest</button>\
    <button type="submit">Compound Interest</button>\
    </form>'
    );
});

app.listen(3001);
