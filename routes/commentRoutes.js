const express = require('express')
const commentController = require('../controllers/commentController')

const router = express.Router()

router.get('/', commentController.commentGetAll)
router.get('/:id', commentController.comment_get_byID)
router.post('/', commentController.comment_create)
router.delete('/:id', commentController.comment_delete)

module.exports = router