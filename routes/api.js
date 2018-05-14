const express = require('express');
const router = express.Router();
const BookController = require('../http/controller/book-controller');
const check = require('../http/middlerware/index');

let bookController = new BookController();

router.get('/home', check.searchCondition, bookController.search);

router.get('/book/:id', check.searchCondition, bookController.search);

router.post('/book', check.bookRequest, bookController.createBook);

router.put('/book/:id', check.bookRequest, bookController.editBook);

router.delete('/delete/:id', bookController.deleteBook);

router.get('/search-advance', check.searchCondition, bookController.search);

router.get('/search-basic', check.searchCondition, bookController.search);


//api service react
router.get('/publishers',bookController.listPublisher);

module.exports = router;
