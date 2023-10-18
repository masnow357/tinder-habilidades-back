
const express = require('express');
const router = express.Router();

const {Matches} = require('../../models/index')
const {User} = require('../../models/index')
router.post('/create_match', async (req, res) => {
	const {other_user_id: otherUserIDString} = req.body
	const {user_id: userID} = req.decoded
	let match
	try {
		const otherUserID = parseInt(otherUserIDString)
		const user = await User.findByPk(userID)
		const otherUser = await User.findByPk(otherUserID)
		if (!otherUser){
			throw Error("User does not exists")
		}
		if (user.dataValues.is_company === otherUser.dataValues.is_company){
			throw Error("Users does cant be the same type")
		}
		const alreadyMatched = (await Matches.findAll({
			where: {
				normal_user_id: userID,
				company_user_id: otherUserID
			}
		})).length
		if (alreadyMatched >= 1){
			return res.json({
				message: 'Match saved correctly',
				data: {id: linkedSkill.id}
			})
		}
		match = await Matches.create({
			normal_user_id: userID,
			company_user_id: otherUserID
		})

		await match.save();
	} catch (error) {
		return res.json({
			message: 'Error saving data',
			error: error.message
		})
	}

	return res.json({
		message: 'Match saved correctly',
		data: {id: linkedSkill.id}
	})

})

module.exports = router;

