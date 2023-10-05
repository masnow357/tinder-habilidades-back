const express = require('express');
const router = express.Router();

const {Linked_skill} = require('../../models/index')


router.post('/', async (req, res) => {
	const {skill_id: skillIDString} = req.body
	const {user_id: userID} = req.decoded
	let linkedSkill
	try {
		const skill_id_number = parseInt(skillIDString)
		linkedSkill = await Linked_skill.create({
			user_id: userID,
			skill_id: skill_id_number
		});
		await linkedSkill.save();
	} catch (error) {
		return res.json({
			message: 'Error saving data',
			error: error.message
		})
	}

	return res.json({
		message: 'Skill saved correctly',
		data: {id: linkedSkill.id}
	})

})

module.exports = router;

