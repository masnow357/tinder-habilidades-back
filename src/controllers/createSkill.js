
const express = require('express');
const router = express.Router();

const {Skill} = require('../../models/index')

router.post('/createSkill', async (req, res) => {
	const {skill_name} = req.body
	let skill
	try {
		skill = await Skill.create({
			name: skill_name
		});
		await skill.save();
	} catch (error) {
		return res.json({
			message: 'Error saving data',
			error: error.message
		})
	}

	return res.json({
		message: 'Skill saved correctly',
		data: {id: skill.id}
	})

})

module.exports = router;

