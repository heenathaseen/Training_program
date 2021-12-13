const express = require('express')
const app = express()
const {body, validationResult, check} = require('express-validator')

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('Home Page')
})

// understanding sanitization
app.post('/form'
, body('username', 'Please enter a valid username')
    .isEmail()
, body('password', 'Your password is not long enough')
    .trim()
    .isLength({min: 5})
, (req, res, next) => {
    errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    res.send(`all ok --${req.body.username}--${req.body.password}--`)
})

app.listen(3000)

// https://github.com/validatorjs/validator.js will show all possible validations

