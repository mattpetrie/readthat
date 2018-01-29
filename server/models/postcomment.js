module.exports = (sequelize, DataTypes) => {
  const PostComment = sequelize.define('PostComment', {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  PostComment.associate = (models) => {
    PostComment.belongsTo(models.Post, {
      foreignKey: 'postId',
      onDelete: 'CASCADE',
    });
    PostComment.belongsTo(models.User, {
      foreignKey: 'authorId',
      as: 'author',
      onDelete: 'CASCADE',
    });
    PostComment.belongsTo(models.PostComment, {
      foreignKey: 'parent',
      as: 'parentComment',
      onDelete: 'CASCADE',
    });
    PostComment.hasMany(models.PostComment, {
      foreignKey: 'id',
      as: 'children',
    });
  };

  return PostComment;
};
