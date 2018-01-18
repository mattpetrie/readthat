module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('PostVotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      vote: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      authorId: {
        type: Sequelize.STRING,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'authorId',
          as: 'authorId',
        },
      },
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Posts',
          key: 'id',
          as: 'postId',
        },
      },
    })
    .then(function() {
      return queryInterface.addConstraint('PostVotes', ['authorId', 'postId'], {
        type: 'unique',
        name: 'custom_unique_constraint_name'
      })
    }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('PostVotes'),
};
