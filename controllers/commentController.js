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
    if(!req.body) {
        res.status(400).send({message: 'Field cannot be empty.'})
        return
    }
    const comment = new Comment({
        comment_user: req.body.comment_user,
        comment_time: null,
        comment_content: req.body.comment_content,
    })

    comment
        .save(comment)
        .then(data => {
            // res.send(data)
            res.redirect('/')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            })
        })
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