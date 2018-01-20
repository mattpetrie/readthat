const PostVote = require('../models').PostVote

module.exports = {
  create(req, res) {
    const { vote, authorId, postId } = req.body.postVote;
    return PostVote
      .create({
        vote,
        authorId,
        postId: req.params.postId,
      })
      .then(postVote => res.status(201).send(postVote))
      .catch(error => res.status(400).send(error));
  },

//////
list(req, res) {
  const authorId = req.params.authorId;
  return PostVote
    .findAll({
      where: {
        authorId: authorId,
      }
    })
    .then(vote => {
      if (!vote) {
        return res.status(404).send({
          message: 'Users PostVotes Not Found',
        });
      }
      return res.status(200).send(vote);
    })
    .catch(error => res.status(400).send(error));
},
retrieve(req, res) {
  const postId = req.params.postId;
  const authorId = req.params.authorId;
  return PostVote
    .findOne({
      where: {
        authorId: authorId,
        postId: postId,
      }
    })
    .then(vote => {
      if (!vote) {
        return res.status(404).send({
          message: 'PostVote Not Found',
        });
      }
      return res.status(200).send(vote);
    })
    .catch(error => res.status(400).send(error));
},

//////

  update(req, res) {
    return PostVote
      .find({
          where: {
            id: req.params.postVoteId,
            postId: req.params.postId,
          },
        })
      .then(postVote => {
        if (!postVote) {
          return res.status(404).send({
            message: 'PostVote Not Found',
          });
        }

        return postVote
          .update(req.body, { fields: Object.keys(req.body) })
          .then(updatedPostVote => res.status(200).send(updatedPostVote))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return PostVote
      .find({
          where: {
            id: req.params.postVoteId,
            postId: req.params.postId,
          },
        })
      .then(postVote => {
        if (!postVote) {
          return res.status(404).send({
            message: 'PostVote Not Found',
          });
        }

        return postVote
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

};
