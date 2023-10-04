const express = require('express');

const jwt = require('jsonwebtoken');

require('dotenv').config({path:'.env'})


const verification = express.Router();

verification.use((req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']

    if (!token || token === undefined || token === null || token === '') {
        return res.status(401).send({
            error: 'Access token is required'
        })
    }

    if(token.startsWith('Bearer ')){
        token = token.slice(7, token.length)
        
    }

    if(token){
        console.log(token)
        jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
            if(error){
                return res.json({
                    message: 'Invalid token',
                    error: error
                })
            }else{
                req.decoded = decoded;
                next()
            }
        })
    }
})

module.exports = verification;