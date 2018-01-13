module.exports = (sequelize, DataTypes) => {
  const PostVote = sequelize.define('PostVote', {
    vote: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
    },
    authorId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  PostVote.associate = (models) => {
    PostVote.belongsTo(models.Post, {
      foreignKey: 'postId',
      onDelete: 'CASCADE',
    });
  };

  return PostVote;
};
