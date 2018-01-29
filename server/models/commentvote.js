module.exports = (sequelize, DataTypes) => {
  const CommentVote = sequelize.define('CommentVote', {
    vote: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  CommentVote.associate = (models) => {
    CommentVote.belongsTo(models.PostComment, {
      foreignKey: 'commentId',
      onDelete: 'CASCADE',
    });
    CommentVote.belongsTo(models.User, {
      foreignKey: 'authorId',
      onDelete: 'CASCADE',
    });
  };

  return CommentVote;
};
