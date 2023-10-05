const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const {User} = require('../../models/index')

String.prototype.hashCode = require('../utils/hash')

process.env.SECRET_KEY

router.post('/', async (req, res) => {
	const {user, password} = req.body
	let currentUser
	// get user
	try {
		currentUser = await User.findAll({
			where: {
				user_name: user
			}
		})

	} catch (error) {
		return res.json({
			message: 'Database conection error',
			error: error,
			token: null
		})
	}

	console.log(password.hashCode().toString(), currentUser[0].password.toString())

	// validate user and password
	if (user === currentUser[0].user_name && password.hashCode().toString() === currentUser[0].password) {
		//generate token
		const payload = {
			user_id: currentUser[0].id
		}
		const token = jwt.sign(payload, process.env.SECRET_KEY, {
			expiresIn: '1d'
		})
		return res.json({
			message: 'Token generated',
			token: token
		})
	} else {
		return res.json({
			message: 'Invalid credentials',
			token: null
		})
	}
})

module.exports = router;

