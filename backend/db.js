const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://@learning.lgdjt.mongodb.net/')

const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    commpleted : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
}
