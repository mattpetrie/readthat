module.exports = (sequelize, DataTypes) => {
  const PostComment = sequelize.define('PostComment', {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parent: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  PostComment.associate = (models) => {
    PostComment.belongsTo(models.Post, {
      foreignKey: 'postId',
      onDelete: 'CASCADE',
    });
  };

  return PostComment;
};
