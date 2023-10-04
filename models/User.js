'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {}
	User.init({
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		user_name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(200),
			unique: true,
			allowNull: false
		},
		is_company: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		timestamps:false,
		sequelize,
		modelName: 'User',
	});
	return User;
};
