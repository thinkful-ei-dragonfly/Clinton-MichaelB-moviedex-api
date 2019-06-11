/* eslint-disable strict */

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('dev'));

const movies = require('./movies-data.json');

app.get('/movies', (req, res) => {

});

app.listen(8000, () => console.log('server listening on 8000'));