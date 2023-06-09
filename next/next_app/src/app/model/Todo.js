const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    todo:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

mongoose.models = {}
module.exports = mongoose.model('Todos', todoSchema)