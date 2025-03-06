const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ashutoshbaramkule:xRHUafacZm4u71b6@learning.lgdjt.mongodb.net/')

const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    commpleted : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
}