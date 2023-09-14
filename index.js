const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Load the .env file
dotenv.config();

// Get env variables
const PORT = process.env.PORT;

app.use('/auth', require('./src/views/auth'))

// Listen on the port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});