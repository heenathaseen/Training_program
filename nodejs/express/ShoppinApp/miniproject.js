const express = require('express')
const app = express()
const cors =require('cors')
app.use(cors({
    origin:"http://127.0.0.1:5501",
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    

}));

const mysql = require('mysql');
const { body, validationResult } = require('express-validator')

const coupon = require('./discount')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const pool = mysql.createPool({
    host: '45.120.136.152',
    port: '3306',
    user: 'thameem',
    //database: 'nodedb',
    database: 'thameem',
    password: 'thameem'
});

// connect
pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});


app.get("/", (req, res) => {
    res.send("Hi Welcome to Amazon")
})


app.get("/city", (req, res) => {
    let sqlQuery = 'SELECT * FROM city'
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(sqlQuery, (err, results) => {
            connection.release(); // return the connection to pool
            if (err) throw err;
            //console.log(results);
            res.json(results);
        });
    });
});


//3.Shopping cart additional APIs to be created to query and
// get product details by ID or query and get city pincodes for a given city name

app.get("/pincode/:cityname", (req, res) => {
    let id = req.params.cityname
    console.log(id);
    let sqlQuery = `SELECT pincode FROM city where city in (?)`
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(sqlQuery, id, (err, results) => {
            connection.release(); // return the connection to pool
            if (err) throw err;
            res.json(results);
        });
    });
});
app.get("/products", (req, res) => {
  
    let sqlQuery = `SELECT * FROM items`

    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(sqlQuery, (err, results) => {
            connection.release(); // return the connection to pool
            if (err) throw err;
            res.json(results);

        });
    });
});


app.get("/product/:id", (req, res) => {
    let id = req.params.id;
    console.log(id);
    let sqlQuery = `SELECT * FROM items where itemId in (?)`

    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(sqlQuery, id, (err, results) => {
            connection.release(); // return the connection to pool
            if (err) throw err;
            res.json(results);
        });
    });
});



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
    , (req, res) => {
        let sqlQuery = 'SELECT * FROM items'
        pool.getConnection((err, connection) => {
            if (err) throw err;
            connection.query(sqlQuery, (err, results) => {
                connection.release(); // return the connection to pool
                if (err) throw err;
                let dbData = results;

                const count = req.body.items.length

                
                //2.Shopping Cart API exercises to be updated so that master data for 
                //items and cities is fetched from database instead of hard coding
                let finalItem = dbData.filter(({ itemId }) => req.body.items.includes(itemId))
                errors = validationResult(req)

                let currentDate = new Date().toDateString()


                // Find the Total Price   
                let totalPrice = finalItem.reduce(function (curr, val) {
                    return curr + val.rate
                }, 0)
                console.log(totalPrice);

                let couponCode = req.body.couponCode
                let couponFun;

                // Getting individual prices.
                let prices = [];
                finalItem.forEach(e => {
                    prices.push(e.Rate)
                })

                // Each prices validation
                let x = finalItem.every(e => {//true or false
                    return e.Rate >= 2000;
                })



                if (x && count >= 3) {

                    if (couponCode == "123abc") {
                        // getting final price
                        couponFun = coupon.get50(totalPrice)
                        console.log(couponFun.toString());

                        // console.log("50%")
                        res.send({ currentDate, FinalPrice: (couponFun), totalPrice, count, finalItem, cityStatus })

                    }
                    else {
                        // console.log("its me 50%");
                        res.send({ currentDate, FinalPrice: "please check the coupon number", totalPrice, count, finalItem })
                    }
                }
                else if (x && count == 2) {

                    if (couponCode == "234bcd") {

                        // getting final price
                        couponFun = coupon.get40(prices)
                        // console.log("40%")
                        res.send({ currentDate, FinalPrice: (couponFun.toString()), totalPrice, count, finalItem })
                    }
                    else {
                        // console.log("its me 40%");
                        res.send({ currentDate, FinalPrice: "please check the coupon number", totalPrice, count, finalItem })
                    }

                }
                else if (totalPrice >= 5000 || count >= 6) {

                    if (couponCode == "345cde") {
                        // getting final price
                        couponFun = coupon.flat500(totalPrice)
                        // console.log("total")
                        res.send({ currentDate, FinalPrice: (couponFun.toString()), totalPrice, count, finalItem })
                    }
                    else {
                        // console.log("its me total");
                        res.send({ currentDate, FinalPrice: "please check the coupon number", totalPrice, count, finalItem })
                    }
                }

                else {
                    // console.log("no coupon");
                    res.send({ currentDate, FinalPrice: "no coupon", totalPrice, count, finalItem })
                }

            });
        });
    })


    app.listen('7000', ()=>{

        console.log("Server started");
    
    });