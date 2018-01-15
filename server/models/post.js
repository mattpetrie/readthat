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
    /*
    authorId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    */
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
      onDelete: 'CASCADE',
    });
  };

  return Post;
};
