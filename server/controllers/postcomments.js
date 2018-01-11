const PostComment = require('../models').PostComment

module.exports = {
  create(req, res) {
    const { body, authorId, parent } = req.body.postComment;
    return PostComment
      .create({
        body,
        authorId,
        parent,
        postId: req.params.postId,
      })
      .then(postComment => res.status(201).send(postComment))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return PostComment
      .find({
          where: {
            id: req.params.postCommentId,
            postId: req.params.postId,
          },
        })
      .then(postComment => {
        if (!postComment) {
          return res.status(404).send({
            message: 'PostComment Not Found',
          });
        }

        return postComment
          .update(req.body, { fields: Object.keys(req.body) })
          .then(updatedPostComment => res.status(200).send(updatedPostComment))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return PostComment
      .find({
          where: {
            id: req.params.postCommentId,
            postId: req.params.postId,
          },
        })
      .then(postComment => {
        if (!postComment) {
          return res.status(404).send({
            message: 'PostComment Not Found',
          });
        }

        return postComment
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

};
