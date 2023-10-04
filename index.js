const express = require('express')
const app = express()

require('dotenv').config({path:'.env'})

const verification = require('./src/utils/verification')

//settings
app.set('port', process.env.PORT)

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use('/login', require('./src/routes/login'))
app.use('/register', require('./src/routes/register'))

//server starter
app.listen(app.get('port'), () => {
	console.log('Server on port ' + app.get('port'))
})
