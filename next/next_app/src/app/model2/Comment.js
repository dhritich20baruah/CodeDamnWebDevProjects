const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment:{
        type:String
    },
    userName:{
        type:String
    },
    blogId:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

mongoose.models = {}
module.exports = mongoose.model('Comment', commentSchema)