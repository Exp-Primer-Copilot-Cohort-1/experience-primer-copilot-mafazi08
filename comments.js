// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create an express app
const app = express();

// Add middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Add a route
app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  });
});

// Start the app
app.listen(process.env.PORT || 8081);