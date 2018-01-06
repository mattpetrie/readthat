const router = require('express').Router();
const postsController = require('../controllers').posts;

router.post('/', postsController.create);
router.get('/', postsController.list);
router.get('/:postId', postsController.retrieve);
router.put('/:postId', postsController.update);
router.delete('/:postId', postsController.destroy);

module.exports = router;
