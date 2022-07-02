const express = require('express');//call the express module
const path = require('path');//call the path module

let app = express();//initialize the express module
const expressHbs = require('express-handlebars');//call express handlebars



//this middleware always runs
app.use(express.static(path.join(__dirname, 'public')));

//view engine configurations
app.engine('hbs', expressHbs());
app.set('view engine', 'hbs');
app.set('view', path.join(__dirname, 'view'));

app.use("/", (req,res,next) =>{
    res.render('index',{layout: false});
});

//listen to port
app.listen(5500);