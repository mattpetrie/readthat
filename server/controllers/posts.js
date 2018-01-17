const Post = require('../models').Post;
const PostComment = require('../models').PostComment;
const User = require('../models').User;

module.exports = {
  create(req, res) {
    const { title, body, url, authorId } = req.body.post;
    return Post
      .create({
        title,
        body,
        url,
        authorId,
      })
      .then(post => res.status(201).send(post))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Post
      .findAll({
        order: [['createdAt', 'DESC']],
        include: [{
          model: PostComment,
          as: 'postComments',
          include: [{
            model: User,
            as: 'author',
            attributes: ['nickname'],
          }],
        }, {
          model: User,
          as: 'author',
          attributes: ['nickname'],
        }],
      })
      .then(posts => res.status(200).send(posts))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Post
      .findById(req.params.postId, {
        include: [{
          model: PostComment,
          as: 'postComments',
          include: [{
            model: User,
            as: 'author',
            attributes: ['nickname'],
          }],
        }, {
          model: User,
          as: 'author',
          attributes: ['nickname'],
        }],
      })
      .then(post => {
        if (!post) {
          return res.status(404).send({
            message: 'Post Not Found',
          });
        }
        return res.status(200).send(post);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Post
      .findById(req.params.postId, {
        include: [{
          model: PostComment,
          as: 'postComments',
          include: [{
            model: User,
            as: 'author',
            attributes: ['nickname'],
          }],
        }, {
          model: User,
          as: 'author',
          attributes: ['nickname'],
        }],
      })
      .then(post => {
        if (!post) {
          return res.status(404).send({
            message: 'Post Not Found',
          });
        }
        return post
          .update({
            body: req.body.post.body || post.body,
          })
          .then(() => res.status(200).send(post))  // Send back the updated post.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Post
      .findById(req.params.postId)
      .then(post => {
        if (!post) {
          return res.status(400).send({
            message: 'Post Not Found',
          });
        }
        return post
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
