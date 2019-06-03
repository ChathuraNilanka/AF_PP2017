const express = require('express');

const Router = express.Router();

const bookController = require('../controller/bookController');
const autController = require('../controller/authorController');

Router.route('/books/add').post(bookController.add);
Router.route('/books/get').get(bookController.getAll);
Router.route('/books/filter/:author').get(bookController.filter);

Router.route('/authors').get(autController.getAll);

module.exports = Router;