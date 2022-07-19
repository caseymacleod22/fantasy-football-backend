const express = require('express')
const commentController = require('../controllers/commentController')

const router = express.Router()

router.get('/', commentController.commentGetAll)

module.exports = router