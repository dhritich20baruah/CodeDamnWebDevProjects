const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type:String
    },
    para1:{
        type:String
    },
    para2:{
        type:String
    },
    image:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

mongoose.models = {}
module.exports = mongoose.model('Blog', blogSchema)