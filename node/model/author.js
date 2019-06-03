const mongoDB = require('mongoose');

const authorModel = mongoDB.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    }
});

module.exports = mongoDB.model('author', authorModel);