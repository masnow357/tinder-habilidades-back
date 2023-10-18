'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Matches.init({
	  id: {
		  type: DataTypes.INTEGER,
		  primaryKey: true,
		  autoIncrement: true,
		  allowNull: false
	  },
	  normal_user_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: 'Users',
			key: 'id'
		},

	},
	  company_user_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: 'Users',
			key: 'id'
		},

	},
		user_like: {
		  type: DataTypes.BOOLEAN,
		  allowNull: true
		},
		  company_like: {
			  type: DataTypes.BOOLEAN,
			  allowNull: true
		  }
  }, {
	  timestamps:false,
	  sequelize,
	  modelName: 'Matches',
  });
  return Matches;
};
