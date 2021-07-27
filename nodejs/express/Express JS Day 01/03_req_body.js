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
    res.send(`<h1>Hello ${req.body.name}!</h1>`);
  });
  
// if no path is specified
app.use('/', (req, res, next) => {
res.send(
    '<form action="/hello" method="POST">\
    <input type="text" name="name">\
    <button type="submit">Go</button>\
    </form>'
    );
});

app.listen(3000);
