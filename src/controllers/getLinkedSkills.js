
const express = require('express');
const router = express.Router();

const {Linked_skill} = require('../../models/index')
router.get('/getLinkedSkills', async (req, res) => {
	const {user_id: userID} = req.decoded
	let linked_skill
	try {
		linked_skill = await Linked_skill.findAll({where:{
			user_id: userID
			}});
	} catch (error) {
		return res.json({
			message: 'Error getting data',
			error: error.message
		})
	}

	return res.json({
		message: 'Linked kills given correctly',
		data: linked_skill
	})

})

module.exports = router;

