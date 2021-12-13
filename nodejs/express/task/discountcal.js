const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
function discountPercentage(item)
{
    var obj = {}
    let temp = new Map();
    for(let i of item){
        for(let j of items.keys()){
            temp.set(i,items.get(i).price)
        
        }
    }
    let totalPrice;
    let c = 0;
    for(let i of temp.values()){
        c = c+i;
    }
    console.log(c)
    totalPrice = c;
    if( item.length >= 6 || totalPrice >= 5000){
        console.log("flat500 coupon is valid");
        obj.valid=true
        obj.coupon="flat500"
        obj.totalAmount = totalPrice
        obj.finalAmount = totalPrice - 500
    }
    else{
        console.log("flat500 is not valid");
        obj.valid=false
    }
    let price1 = false
    for(let i of item){
        if(items.get(i).price>=2000)
        price1 = true

    }
    if(item.length == 2 || price1){
        console.log("get40 is valid");
        obj.valid = true
        obj.coupon = "get40"
        obj.totalAmount = totalPrice
        obj.finalAmount = totalPrice - (totalPrice/100)*40 
    }
    else{
        console.log("get40 is not valid");
        obj.valid = false
    }


    if(item.length == 3 ||  price1){
        console.log("get50 is valid");
        obj.valid = true
        obj.coupon = "get50"
        obj.totalAmount = totalPrice
        obj.finalAmount = totalPrice - (totalPrice/100)*50 
    }
    else{
        console.log("get50 is not valid");
        obj.valid = false
    }


    return obj
}
console.log(discountPercentage(["i1001"]));
module.exports = router;
