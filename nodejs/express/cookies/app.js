// express is sufficient, http is not required
const path = require('path')
const express = require('express');

const db = require('./sqlConnection');


const app = express();
app.use(express.urlencoded({ extended: false }))

let information = new Array();


// the first path

app.use('/login', (req, res, next) => {
    res.setHeader('Set-Cookie', 'loggedIn=true');
    user = req.body.username;
    pass = req.body.password;
    information.push(user)
    information.push(pass)
    db.query("SELECT * FROM login WHERE username= ? AND password=?", [user, pass],
        (err, result) => {
            if (err) {
                throw err;
            } else if (result.length > 0) {
                res.sendFile(path.join(__dirname, 'home.html'))
            } else {
                res.send('wrong')
            }
        }
    );

    console.log(user);
    console.log(pass)
    res.cookie(`${user}`, `${pass}`, {
            maxAge: 30000,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production' ? true : false
        })
        // res.sendFile(path.join(__dirname, 'home.html'))
});

// the second path
app.use('/page2', (req, res, next) => {
    let cookie = req.get('Cookie')
    res.send(`This is the second page... ${cookie}`)
});

// the third path
app.use('/logout', (req, res, next) => {

    res.clearCookie(information[0]);
    res.sendFile(path.join(__dirname, 'logout.html'))
});

// the first path
app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});


// app.post('/logout', (req, res, next) => {
//     //console.log(user)
//     res.sendFile(path.join(__dirname, 'index.html'))
// });

app.listen(8000);