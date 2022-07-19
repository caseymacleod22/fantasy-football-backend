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

const comment_get_byID = (req, res) => {
    const id = req.params.id;
    Comment.findById(id)
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
}

const comment_create = (req, res) => {
    const comment = new Comment(req.body);
    comment.save()
        .then(result => {
            res.status(201).send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
}

const comment_delete = (req, res) => {
    const id = req.params.id;
    Comment.findByIdAndDelete(id)
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
}

module.exports = {
    commentGetAll,
    comment_get_byID,
    comment_create,
    comment_delete,
}