const router = require('express').Router();
const usersController = require('../controllers').users;
const postVotesController = require('../controllers').postVotes;

router.post('/', usersController.create);
router.get('/', usersController.list);
router.get('/:authorId/postvotes', postVotesController.list);
router.get('/:authorId', usersController.retrieve);
router.put('/:authorId', usersController.update);
router.delete('/:authorId', usersController.destroy);

module.exports = router;
