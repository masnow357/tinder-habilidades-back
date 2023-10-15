
const express = require('express');
const router = express.Router();

const {Linked_skill} = require('../../models/index')
router.get('/', async (req, res) => {
	let linked_skill
	try {
		linked_skill = await Linked_skill.findAll();
	} catch (error) {
		return res.json({
			message: 'Error saving data',
			error: error.message
		})
	}

	return res.json({
		message: 'Skills given correctly',
		data: linked_skill
	})

})

module.exports = router;

