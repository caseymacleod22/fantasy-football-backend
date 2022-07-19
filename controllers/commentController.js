const {Comment} = require('../models/comment')

const commentGetAll = (req, res) => {
    Comment.find().sort({ createdAt: -1})
    .then(result => {
        res.status(200).send(result)
    })
    .catch(err => {
        res.status(400).send(`There was an error in the server while loading comments`)
    })
}

module.exports = {commentGetAll}