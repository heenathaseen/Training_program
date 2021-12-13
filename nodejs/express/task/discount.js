const express = require('express');
// this module is used to create routes
const router = express.Router();

router.post('/itemdiscount', (req, res, next) => {
    //console.log(req.body)
    let items = req.body.productName
    let price = req.body.rate
    let totalAmount
    let message = ''
    let afterDiscount
    totalAmount = totalAmount + item

    if (totalAmount > 5000 && items >= 6) {
        message = `500 coupen is applicable, ${req.body.item}! `
        afterDiscount = totalAmount - 500
    } else if (item >= 3 && price >= 2000 && totalAmount >= 6000) {
        message = `50% coupon is applicable, ${req.body.item}!`
        afterDiscount = totalAmount - 50/100
    } else if (items >= 2 && price >= 2000 && totalAmount >= 4000) {
        message = `40% coupen is applicable, ${req.body.item}!`
        afterDiscount = price - 40/100
    } else {
        message = `this item is not eligible for any discount, ${req.body.item}!`
    }

    res.send(message);
});

module.exports = router;