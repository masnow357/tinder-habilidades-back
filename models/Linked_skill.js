'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Linked_skill extends Model {}
	Linked_skill.init({
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Users',
				key: 'id'
			},

		},
		skill_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Skills',
				key: 'id'
			},
		}
	}, {
		timestamps:false,
		sequelize,
		modelName: 'Linked_skill',
	});
	return Linked_skill;
};
