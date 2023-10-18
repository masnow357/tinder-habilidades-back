
const express = require('express');
const router = express.Router();

const {Linked_skill} = require('../../models/index')
router.post('/addLinkedSkill', async (req, res) => {
	const {skill_id: skillIDString} = req.body
	const {user_id: userID} = req.decoded
	let linkedSkill
	try {
		const skillIDNumber = parseInt(skillIDString)
		const quantityOfLinkedSkills = (await Linked_skill.findAll({
			where: {
				user_id: userID
			}
		})).length
		if (quantityOfLinkedSkills >= 10){
			throw Error("Maximum size of objects linked to this user")
		}
		const alreadyLinked = (await Linked_skill.findAll({
			where: {
				user_id: userID,
				skill_id: skillIDNumber
			}
		})).length
		if (alreadyLinked >= 1){
			throw Error("This skill is already linked to this user")
		}

		linkedSkill = await Linked_skill.create({
			user_id: userID,
			skill_id: skillIDNumber
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

