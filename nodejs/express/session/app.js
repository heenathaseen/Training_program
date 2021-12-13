const path = require('path')
const express = require('express');

const session = require('express-session');
const db = require('./sql')

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'mysession'
    , resave: false
    , saveUninitialized: false
}))


// the first path
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.post('/login', (req, res) => {
    req.session.isLoggedIn = true;
    req.session.username = req.body.username
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM login WHERE username= ? AND password=?",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                res.sendFile(path.join(__dirname, 'home.html'))
            } else {
                res.send({ message: "Wrong username & password" });
            }
        }
    );
})


app.get('/page2', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'page2.html'))
  });
  
  app.post('/logout', (req, res, next) => {
    // res.send(`This is the second page... \
    //   ${req.session.username} has logged in = ${req.session.isLoggedIn}`)
    req.session.destroy((err)=>{
        if(err) throw err;
        res.sendFile(path.join(__dirname, 'index.html'))
    })
  });

app.listen(8000);