module.exports = (sequelize, DataTypes) => {
  const PostVote = sequelize.define('PostVote', {
    vote: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    /*
    authorId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    */
  });

  PostVote.associate = (models) => {
    PostVote.belongsTo(models.Post, {
      foreignKey: 'postId',
      onDelete: 'CASCADE',
    });
    PostVote.belongsTo(models.User, {
      foreignKey: 'authorId',
      onDelete: 'CASCADE',
    });
  };

  return PostVote;
};
