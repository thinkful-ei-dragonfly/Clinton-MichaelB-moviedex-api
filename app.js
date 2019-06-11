/* eslint-disable strict */

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('dev'));

const playstore = require('./playstore');

app.get('/apps', (req, res) => {
  const {sort, genres} = req.query;

  let results = playstore;

  if(sort) {
      if(!['rating', 'app'].includes(sort)) {
          return res
          .status(400)
          .send('Sort must be one of rating or app')
      }
  }

  if(sort) {
      results
        .sort((a, b) => {
          return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
      }); 
    } 

 
  if (genres) {
      if(!['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'].includes(genres)) {
          return res
              .status(400)
              .send(`Genres must be 'Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'`)
      }
  }
  if(genres) {
  results = playstore
          .filter(playstoreapp => {
              playstoreapp
              .Genres
              .toLowerCase()
              .includes(genres.toLowerCase());
          })
  }

  res
  .json(results);
});

app.listen(8000, () => console.log('server listening on 8000'));