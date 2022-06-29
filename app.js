//call the function to get the data
const http = require('http');
const routes = require('./routes/route');

//create a server with a callback function
const server = http.createServer(routes);

//listen on port 5500
server.listen(5500);