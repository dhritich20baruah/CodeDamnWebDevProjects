const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title:{
        type: String
    },
    todo:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

mongoose.models = {} //Nextjs compiles the mongoose model only once. It will save the first todo but when we save another todo it will throw an error. So this line resets the mongoose model to an empty object
module.exports = mongoose.model('Todos', todoSchema)