const express = require('express')
const app = express()

require('dotenv').config({path:'.env'})

const verification = require('./src/utils/verification')

//settings
app.set('port', process.env.PORT)

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//auth routes
app.use('/login', require('./src/routes/loginView'))
app.use('/register', require('./src/routes/registerView'))

//skill routes
app.use('/api/skills', verification, require('./src/routes/SkillView'))
app.use('/api/linked_skills', verification, require('./src/routes/linkedSkillsView'))

//match routes
app.use('/api/match', verification, require('./src/routes/matchView'))

//server starter
app.listen(app.get('port'), () => {
	console.log('Server on port ' + app.get('port'))
})
