const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment_user: { type: String, required: true },
    comment_time: { type : Date, default: Date.now },
    comment_content: { type: String, required: true },
  }, {
    timestamps: true,
  });

const Comment = mongoose.model('Comment', commentSchema)

module.exports = {Comment}