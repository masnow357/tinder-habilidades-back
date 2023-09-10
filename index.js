const express = require('express');
const dotenv = require('dotenv');
const Sequelize = require('sequelize');

// Create an Express app
const app = express();

// Load the .env file
dotenv.config();


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('tinder-skills', 'tinder-skills', 'tinder-skills', {
    host: 'localhost',
    dialect: 'postgres',
    port: '5432'
    });

const test = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        } catch (error) {
        console.error('Unable to connect to the database:', error);
        }

}

test()

// Set the port
const port = process.env.PORT || 3000;

// Listen on the port
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});