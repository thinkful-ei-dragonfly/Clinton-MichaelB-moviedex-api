const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('dev'));

const playstore = require('./playstore');

app.get('/apps', (req, res) => {
  const {sort, genres} = req.query

  console.log(sort);

  res.send(playstore);
})

app.listen(8000, () => console.log('server listening on 8000'));