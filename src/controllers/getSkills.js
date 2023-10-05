
const express = require('express');
const router = express.Router();

const {Skill} = require('../../models/index')
router.get('/', async (req, res) => {
	let skill
	try {
		skill = await Skill.findAll();
	} catch (error) {
		return res.json({
			message: 'Error saving data',
			error: error.message
		})
	}

	return res.json({
		message: 'Skills given correctly',
		data: skill
	})

})

module.exports = router;

