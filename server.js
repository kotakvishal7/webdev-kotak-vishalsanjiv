// Importing installed Express framework to create server.
const express = require('express');
const path = require('path');
// Allows us to create http servers
const http = require('http');

// Importing body parser to parse json data from body of the webpage.
const bodyParser = require('body-parser');

// Creating an instance of Express
const app = express();

// Asking the body parser to parse json from the body
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));




// Point static path to dist -- For building -- REMOVE
// app.use(express.static(path.join(__dirname, 'dist')));



// Allow http requests to be handled only from the server it was downloaded
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});



// Listening for requests on port 3100
const port = process.env.PORT || '3100';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);

// var serverSide = require("./server/test-mongodb/app");
// serverSide(app);


var assignment = require('./assignment/app');
assignment(app);


server.listen(port);


