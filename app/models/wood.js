'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wood.init({
    name: DataTypes.STRING,
    type: {
      type: DataTypes.ENUM('softwood', 'exotic wood', 'noble and hardwoods'),
      validate: {
        isIn: {
          args: [
            ['softwood', 'exotic wood', 'noble wood']
          ],
          msg: 'Le champ type doit être soit softwood, exotic wood ou noble and hardwoods.'
        }
      }
    },
    hardness: {
      type: DataTypes.ENUM('tender', 'medium-hard', 'hard'),
      validate: {
        isIn: {
          args: [
            ['tender', 'medium-hard', 'hard']
          ],
          msg: 'Le champ hardness doit être soit tender, medium-hard ou hard.'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Wood',
  });
  return Wood;
};