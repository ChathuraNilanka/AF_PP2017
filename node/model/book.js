const mongoDB = require('mongoose');

const bookModel = mongoDB.Schema({
    name: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    publisher: {
        type: String,
        required: true
    }
});

module.exports = mongoDB.model('book', bookModel);