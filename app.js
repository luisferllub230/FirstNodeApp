//call the express module
const express = require('express');
//call the path module
const path = require('path');
//initialize the express module
let app = express();
//call express handlebars
const expressHbs = require('express-handlebars');

//this middleware always runs
app.use(express.static(path.join(__dirname, 'public')));

//that is the function middleware
app.use("/", (req,res,next) =>{
    res.sendFile(path.join(__dirname,'view','index.html'));
});

//listen to port
app.listen(5500);