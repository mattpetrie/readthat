const router = require('express').Router();
const postsController = require('../controllers').posts;
const postCommentsController = require('../controllers').postComments;
const postVotesController = require('../controllers').postVotes;
const commentVotesController = require('../controllers').commentVotes;


router.post('/', postsController.create);
router.get('/', postsController.list);
router.get('/:postId', postsController.retrieve);
router.put('/:postId', postsController.update);
router.delete('/:postId', postsController.destroy);

router.post('/:postId/votes', postVotesController.create);
router.put('/:postId/votes', postVotesController.update);
router.get('/:postId/votes/:authorId', postVotesController.retrieve);

router.post('/:postId/comments', postCommentsController.create);
router.post('/:postId/comments/:commentId/votes', commentVotesController.create);
router.put('/:postId/comments/:commentId/votes', commentVotesController.update);
router.put('/:postId/comments/:commentId', postCommentsController.update);
router.delete(
  '/:postId/items/:postCommentId', postCommentsController.destroy
);

module.exports = router;
