const express = require('express');
const bodyparser = require('body-paser')
app.use(bodyparser.urlencoded({extended: false}))

const app = express(); 
app.post('/interest', (req, res, next) => { 
    console.log(req.body)
    let p = req.body.principal 
    let r = req.body.rate 
    let t = req.body.time 
    let simpleInterest = ''  
    let calculate
    
    calculate = (p*r*t)/100; 
    simpleInterest = `The Type of interest for ${req.body.time} on ${req.body.principal} is ${calculate}`;
   
    res.send(simpleInterest);   
});
app.listen(8000);