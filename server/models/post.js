module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  Post.associate = (models) => {
    Post.hasMany(models.PostComment, {
      foreignKey: 'postId',
      as: 'postComments',
    });
    Post.hasMany(models.PostVote, {
      foreignKey: 'postId',
      as: 'postVotes',
    });
    Post.belongsTo(models.User, {
      foreignKey: 'authorId',
      as: 'author',
      onDelete: 'CASCADE',
    });
  };

  return Post;
};
