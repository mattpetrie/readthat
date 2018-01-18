const router = require('express').Router();
const postsController = require('../controllers').posts;
const postCommentsController = require('../controllers').postComments;
const postVotesController = require('../controllers').postVotes;

router.post('/', postsController.create);
router.get('/', postsController.list);
router.get('/:postId', postsController.retrieve);
router.put('/:postId', postsController.update);
router.delete('/:postId', postsController.destroy);

router.post('/:postId/votes', postVotesController.create);

router.post('/:postId/comments', postCommentsController.create);
router.put('/:postId/comments/:postCommentId', postCommentsController.update);
router.delete(
  '/:postId/items/:postCommentId', postCommentsController.destroy
);

module.exports = router;
