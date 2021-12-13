const express = require('express')
const app = express()
const {body, validationResult, check} = require('express-validator')

app.use(express.urlencoded({extended: false}))

// understanding validations
app.post('/form'
, body('username', 'Please enter a valid username')
.isEmail()
, body('password', 'Your password is not long enough')
.trim()
.isLength({min: 5})
, (req, res, next) => {
    errors = validationResult(req)
    if(!errors.isEmpty()) {
        let error = new Error('Some random error')
        error.httpStatusCode = 500
        return next(error)
        //return res.status(400).json({errors: errors.array()})
    }
    res.send(`all ok --${req.body.username}--${req.body.password}--`)
})

app.use((error, req, res, next) => {
    res.status(500).send('this is an error')
    //res.redirect('/500')
})

app.listen(3000)

// https://github.com/validatorjs/validator.js will show all possible validations