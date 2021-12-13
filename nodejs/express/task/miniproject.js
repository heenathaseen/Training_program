const express = require('express')
const app = express()
const { body, validationResult, check } = require('express-validator')
const { keys } = require('./item')
const itemsmap = require('./item')
app.use(express.urlencoded({ extended: false }))

app.post('/shopping'
    , body('items', 'please enter crt id ').isAlphanumeric()
    , body('couponCode')
        .isLength({ min: 6 })
        .withMessage("Length should be 6")
        .isAlphanumeric()
        .withMessage('coupon code should be alphanumber')
    , body('customerName')
        .isLength({ min: 1, max: 30 })
        .withMessage("Name length should be atleast 1 or upto 30")
        .isAlphanumeric()
        .withMessage('customer Name should be in alphanumber')
    , body('email').isEmail()
    , body('phoneNumber')
        .isMobilePhone()
        .withMessage("phone number should be numberic")
        .isLength({ min: 10, max: 10 })
        .withMessage("phone number length should be 10")
    , body('shippingAddress')
        .matches(/^[ A-Za-z0-9#]*$/)
        .withMessage('shipping address should be in alphanumber with only # as special character')
        .isLength({ min: 2, max: 100 })
        .withMessage("shipping address length should be  upto 100")
    , body('city')
        .isAlpha()
        .withMessage('city name should be in alpha')
        .isLength({ min: 3, max: 20 })
        .withMessage("city name length should be atleast 3 or upto 100")
    , body('pincode')
        .isNumeric()
        .withMessage("pincode should be numberic")
        .isLength({ min: 6, max: 6 })
        .withMessage("pincode length should be 6")


    , (req, res, next) => {
        errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        else {
            let a = req.body.items;
            if (itemsmap.has(a)) {
                res.send(`The details of the customer and shopping ${req.body.items} ${req.body.couponCode} ${req.body.customerName}
                ${req.body.email} ${req.body.phoneNumber} ${req.body.shippingAddress}
                ${req.body.city} ${req.body.pincode}`)
            } else {
                console.log("error occured")
            }
        }

    })


app.listen(4001)