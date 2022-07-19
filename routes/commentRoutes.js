const express = require('exress')
const projectController = require('../controllers/commentController')

const router = express.Router

router.get('/', commentController.commentGetAll)

module.exports = router