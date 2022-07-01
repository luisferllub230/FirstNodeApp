//call the express module
const express = require('express');
//call the path module
const path = require('path');
//initialize the express module
let app = express();

//this middleware always runs
// let num = 0;
// app.use((req, res, next)=>{
//     num = Math.round(Math.random()*9) + 1;
//     next();
// });


//that is the function middleware
app.use("/", (req,res,next) =>{
    res.sendFile(path.join(__dirname,'view','index.html'));
});

//listen to port
app.listen(5500);