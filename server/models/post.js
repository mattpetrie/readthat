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
      type: DataTypes.STRING,
      allowNull: true,
    },
    authorId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Post;
};
