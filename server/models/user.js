module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    authorId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first: {
      type: DataTypes.STRING
    },
    last: {
      type: DataTypes.STRING
    },
    picture: {
      type: DataTypes.STRING
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Post, {
      foreignKey: 'authorId',
      as: 'posts',
    });
    User.hasMany(models.PostComment, {
      foreignKey: 'authorId',
      as: 'postComments',
    });
    User.hasMany(models.PostVote, {
      foreignKey: 'authorId',
      as: 'postVotes',
    });
  };

  return User;
};
