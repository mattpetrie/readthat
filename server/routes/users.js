const router = require('express').Router();
const usersController = require('../controllers').users;

router.post('/', usersController.create);
router.get('/', usersController.list);
router.get('/:authorId', usersController.retrieve);
router.put('/:authorId', usersController.update);
router.delete('/:authorId', usersController.destroy);

module.exports = router;
