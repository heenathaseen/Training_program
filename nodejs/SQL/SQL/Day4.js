const express = require("express");
const db = require("./sqlConnection");

const app = express();
app.get("/updatePost/:id",(req,res)=>{  
    let body = "Update Body" 
    let sqlQuery = `UPDATE posts SET body = '${body}' WHERE id = ${req.params.id}`
    db.execute(sqlQuery)
    .then((result)=>{
        //console.log(result); 
        console.log(result);
        res.send(`Post ${req.params.id} updated ..`);
    })
    .catch((err)=>{
        console.log(err);
    });
})



app.listen('3000', ()=>{
    console.log("Server started");
});



