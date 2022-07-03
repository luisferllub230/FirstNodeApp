const express = require('express');//call the express module
const path = require('path');//call the path module
let app = express();//initialize the express module
const expressHbs = require('express-handlebars');//call express handlebars
const routes = require('./routes/route');//call the routes module

//post form data
app.use(express.urlencoded({extended: false}));

//this middleware always runs
app.use(express.static(path.join(__dirname, 'public')));

//view engine configurations
app.engine('hbs', expressHbs());
app.set('view engine', 'hbs');
app.set('views', 'view');

//routes
app.use(routes);

//listen to port
app.listen(5500);