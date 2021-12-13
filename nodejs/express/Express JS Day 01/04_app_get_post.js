const express = require('express');
// this is older code you may encounter
//const bodyParser = require('body-parser');

const app = express();

// this is older code you may encounter
//app.use(bodyParser.urlencoded({extended: false}));

app.use(express.urlencoded({extended: false}))
app.use((req, res, next) => {
  console.log('In the Express middleware!');
  // Allows the request to continue to the next middleware in line
  next(); 
});
// the first path
app.post('/hello', (req, res, next) => {
    console.log(req.body)
    res.send(`<h1>Hello ${req.body.name}!</h1>`);
  });
  
// if no path is specified
app.get('/', (req, res, next) => {
res.send(
    '<form action="/hello" method="POST">\
    <input type="text" name="name">\
    <button type="submit">Go</button>\
    </form>'
    );
});


app.listen(4000);
