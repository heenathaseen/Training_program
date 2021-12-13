const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
let itemsmap = new Map();
itemsmap.set("1A", {
    ProductName: "Rice",
    Rate: "60",
    Description: "Good"
})
itemsmap.set("2B", {
    ProductName: "Oil",
    Rate: "160",
    Description: "Good"
})
itemsmap.set("3C", {
    ProductName: "Wheat",
    Rate: "60",
    Description: "Good"
})
itemsmap.set("4D", {
    ProductName: "Ghee",
    Rate: "1000",
    Description: "Good"
})
itemsmap.set("5E", {
    ProductName: "Phone",
    Rate: "8000",
    Description: "Good"
})
itemsmap.set("6F", {
    ProductName: "Powder",
    Rate: "1000",
    Description: "Good"
})
itemsmap.set("7G", {
    ProductName: "Cycle",
    Rate: "2000",
    Description: "Good"
})
itemsmap.set("8H", {
    ProductName: "Laptop",
    Rate: "23000",
    Description: "Good"
})
itemsmap.set("9I", {
    ProductName: "Keyboard",
    Rate: "600",
    Description: "Good"
})
itemsmap.set("10", {
    ProductName: "Keyboard",
    Rate: "600",
    Description: "Good"
})
let city = ["Chennai", "Karur", "Madurai", "Salem", "Erode"];


let coupon = ["Flat500", "Get40", "Get50"];
app.get('/AllItems', (req, res, next) => {
    res.send("--Available Coupons--" + "<br>" + coupon.join(`<br>`) + "<br>" + "--Available Cities--" + "<br>" + city.join(`<br>`))
})
app.listen(4000)
module.exports = itemsmap