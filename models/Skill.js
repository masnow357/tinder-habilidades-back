'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Skill extends Model {}
	Skill.init({
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		}
	}, {
		timestamps:false,
		sequelize,
		modelName: 'Skill',
	});
	return Skill;
};
