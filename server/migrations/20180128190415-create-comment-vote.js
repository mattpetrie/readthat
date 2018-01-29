module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('CommentVotes', {
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
      commentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'PostComments',
          key: 'id',
          as: 'commentId',
        },
      },
    })
    .then(function() {
      return queryInterface.addConstraint('CommentVotes', ['authorId', 'commentId'], {
        type: 'unique',
        name: 'only_one_vote_per_comment_per_user'
      })
    }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('CommentVotes'),
};
