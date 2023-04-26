'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Woods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM('softwood', 'exotic wood', 'noble and hardwoods'),
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
        type: Sequelize.ENUM('tender', 'medium-hard', 'hard'),
        validate: {
          isIn: {
            args: [
              ['tender', 'medium-hard', 'hard']
            ],
            msg: 'Le champ hardness doit être soit tender, medium-hard ou hard.'
          }
        }
      },
      image: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Woods');
  }
};