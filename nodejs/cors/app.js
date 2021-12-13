const express = require('express');
const cors =require('cors')
const app = express();

app.use(cors({
    origin:"http://127.0.0.1:5500",
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    

}));



app.get("/data",(req,res)=>{

    res.json({name:"Tina",class:"2"})

});



app.listen('3000', ()=>{

    console.log("Server started");

});