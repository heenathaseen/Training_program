const express = require('express')
const app = express()
const {body, validationResult, check} = require('express-validator')

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('Home Page')
})

// understanding validations
app.post('/form'
, body('username', 'Please enter a valid username').isEmail()
, body('password', 'Your password is not long enough').isLength({min: 5})
, (req, res, next) => {
    errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    res.send(`all ok ${req.body.username} ${req.body.password}`)
})

// chaining validations
app.post('/chaining'
, check('email')
    .isEmail()
    .withMessage('Please enter a valid email')
, check('text')
    .isLowercase()
    .withMessage('Please enter lowercase text')
    .isLength({min: 10, max:20})
    .withMessage('Text should be 10 to 20 characters long')
, (req, res, next) => {
    errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    res.send(`all ok ${req.body.email} ${req.body.text}`)
})

// custom validation
app.post('/custom'
, check('text1')
    .custom((value, {req}) => {
        if(value != 'secret value') {
            throw new Error("not the secret value")
        }
        return true
    })
    .withMessage('Please enter the secret text')
, (req, res, next) => {
    errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    res.send(`You have entered the secret value`)
})

// comparing field values
app.post('/doublevalue'
, body('num1')
    .isInt({min:100, max:200})
    .withMessage('Please enter an integer between 100 and 200')
, body('num2')
    .isInt({min: 200, max: 400})
    .withMessage('Please enter an integer between 200 and 400')
, body('num2')
    .custom((value, {req}) => {
        if(value != req.body.num1 * 2) {
            throw new Error('value error')
        }
        return true
    })
    .withMessage('Second number should be double the first number')
, (req, res, next) => {
    errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    res.send(`You have entered the secret values\
     of ${req.body.num1} and ${req.body.num2}`)
})

app.listen(3000)

// https://github.com/validatorjs/validator.js will show all possible validations