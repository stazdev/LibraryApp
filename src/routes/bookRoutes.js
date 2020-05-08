const express = require('express');
const bookController = require('../controllers/bookControllers');
const bookService = require('../services/goodreadServices');

const bookRouter = express.Router();

function router(nav) {
  const { getIndex, getById, middleware } = bookController(bookService, nav);
  bookRouter.use(middleware);
  bookRouter.route('/')
    .get(getIndex);

  bookRouter.route('/:id').get(getById);
  return bookRouter;
}

module.exports = router;
