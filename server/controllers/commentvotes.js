const CommentVote = require('../models').CommentVote

module.exports = {
  create(req, res) {
    const { vote, authorId } = req.body.commentVote;
    return CommentVote
      .create({
        vote,
        authorId,
        postId: parseInt(req.params.postId, 10),
        commentId: parseInt(req.params.commentId, 10),
      })
      .then(commentVote => res.status(201).send(commentVote))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    const { authorId, vote } = req.body.commentVote;
    return CommentVote
      .findOne({
          where: {
            authorId,
            commentId: parseInt(req.params.commentId, 10),
          },
        })
      .then(commentVote => {
        if (!commentVote) {
          return res.status(404).send({
            message: 'CommentVote Not Found',
          });
        }

        return commentVote
          .update({
            vote,
          })
          .then(updatedCommentVote => res.status(200).send(updatedCommentVote))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    const authorId = req.params.authorId;
    return CommentVote
      .findAll({
        where: {
          authorId: authorId,
        }
      })
      .then(votes => {
        if (!votes) {
          return res.status(404).send({
            message: 'Users CommentVotes Not Found',
          });
        }
        return res.status(200).send(votes);
      })
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    const commentId = req.params.commentId;
    const authorId = req.params.authorId;
    return CommentVote
      .findOne({
        where: {
          authorId: authorId,
          commentId: commentId,
        }
      })
      .then(vote => {
        if (!vote) {
          return res.status(404).send({
            message: 'CommentVote Not Found',
          });
        }
        return res.status(200).send(vote);
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return CommentVote
      .find({
          where: {
            id: req.params.commentVoteId,
            commentId: req.params.commentId,
          },
        })
      .then(commentVote => {
        if (!commentVote) {
          return res.status(404).send({
            message: 'CommentVote Not Found',
          });
        }

        return commentVote
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

};
