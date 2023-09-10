const express = require('express');
const dotenv = require('dotenv');

// Create an Express app
const app = express();

// Load the .env file
dotenv.config();

// Get env variables
const PORT = process.env.PORT;

// Listen on the port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});