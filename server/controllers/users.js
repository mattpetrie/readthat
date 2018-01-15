const User = require('../models').User;
const Post = require('../models').Post;
const PostVote = require('../models').PostVote;
const PostComment = require('../models').PostComment;

module.exports = {
  create(req, res) {
    const { authorId,
            email,
            nickname,
            first,
            last,
            picture,
          } = req.body.user;
    return User
      .create({
        authorId,
        email,
        nickname,
        first,
        last,
        picture,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return User
      .findAll({
        order: [['createdAt', 'DESC']],
        include: [
          {
          model: Post,
          as: 'posts',
          }, {
          model: PostComment,
          as: 'postComments',
          }, {
          model: PostVote,
          as: 'postVotes',
          }],
      })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return User
      .findById(req.params.authorId, {
        include: [
          {
          model: Post,
          as: 'posts',
          }, {
          model: PostComment,
          as: 'postComments',
          }, {
          model: PostVote,
          as: 'postVotes',
          }],
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return User
      .findById(req.params.authorId, {
        include: [
          {
          model: Post,
          as: 'posts',
          }, {
          model: PostComment,
          as: 'postComments',
          }, {
          model: PostVote,
          as: 'postVotes',
          }],
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return user
          .update({
            email: req.body.user.email || user.email,
            nickname: req.body.user.nickname || user.nickname,
            first: req.body.user.first || user.first,
            last: req.body.user.last || user.last,
            picture: req.body.user.picture || user.picture,
          })
          .then(() => res.status(200).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return User
      .findById(req.params.authorId)
      .then(user => {
        if (!user) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
