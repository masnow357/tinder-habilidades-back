const express = require('express');
const router = express.Router();

String.prototype.hashCode = require('../utils/hash')

const {User} = require('../../models/index')

process.env.SECRET_KEY

// create
router.post('/', async (req, res) => {
	const {name, user_name, password, email} = req.body;

	let {is_company} = req.body;

	if (typeof name !== 'string') {
		return res.json({
			message: 'Invalid name'
		})
	}

	if (!(is_company === 'true' || is_company === 'false')) {
		return res.json({
			message: 'Invalid Data'
		})
	} else {
		is_company = Boolean(is_company)
		console.log(typeof is_company, "is_company")
	}

	if (typeof email !== 'string') {
		return res.json({
			message: 'Invalid email'
		})
	}

	if (typeof user_name !== 'string') {
		return res.json({
			message: 'Invalid user_name'
		})
	}

	if (typeof password !== 'string') {
		return res.json({
			message: 'Invalid password'
		})
	}
	let user
	try {
		user = await User.create({
			name: name,
			user_name: user_name,
			password: password.hashCode(),
			email: email,
			is_company: is_company
		});
		await user.save();
	} catch (error) {
		return res.json({
			message: 'Error saving data',
			error: error.errors
		})
	}

	return res.json({
		message: 'User saver correctly',
		data: {id: user.id}
	})
})

module.exports = router;

