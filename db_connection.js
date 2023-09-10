const dotenv = require('dotenv');
const Sequelize = require('sequelize');

// Load the .env file
dotenv.config();

// Get env variables
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PWD = process.env.DB_PWD;

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
    host: DB_HOST,
    dialect: 'postgres',
    port: DB_PORT
    });

const test = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        } catch (error) {
        console.error('Unable to connect to the database:', error);
        }

}

module.exports = sequelize;

