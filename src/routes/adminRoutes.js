const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('index:adminRoutes');

const adminRouter = express.Router();
const books = [
  {
    title: 'war of peace',
    genre: 'Historical Fiction',
    author: 'Shola',
    read: 'false',
    bookId: 656
  },
  {
    title: 'game of throne',
    genre: 'Fiction',
    author: 'OluwaShola',
    read: 'false',
    bookId: 65699

  },
  {
    title: 'Harry potter',
    genre: 'Historical Fiction',
    author: 'Azeez',
    read: 'false',
  },
  {
    title: 'war of peace',
    genre: 'Historical Fiction',
    author: 'Shola',
    read: 'false',
  },
];

function router() {
  adminRouter.route('/')
    .get((request, response) => {
      const url = 'mongodb://localhost:27017';
      const dbName = 'libraryApp';

      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('Connected correctly to server');

          const db = client.db(dbName);
          const res = await db.collection('books').insertMany(books);
          response.json(res);
        } catch (error) {
          debug(error.stack);
        }
        client.close();
      }());
      // response.send('inserting books');
    });
  return adminRouter;
}

module.exports = router;
