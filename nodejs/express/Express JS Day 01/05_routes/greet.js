const express = require('express');
// this module is used to create routes
const router = express.Router();

router.post('/greet', (req, res, next) => {
    //console.log(req.body)
    let lang = req.body.language
    let message = ''

    if(lang && lang.toUpperCase() == 'TAMIL') {
        message = `Vanakkam, ${req.body.name}!`
    } else if(lang && lang.toUpperCase() == 'HINDI') {
        message = `Namaste, ${req.body.name}!`
    } else if(lang && lang.toUpperCase() == 'ENGLISH') {
        message = `Hello, ${req.body.name}!`
    } else {
        message = `Greetings, ${req.body.name}!`
    }

    res.send(message);
});

module.exports = router;
