const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.use('/api', require('./routes'));

server.get('/', (req, res, next) => {
  try {
    res.status(200).json({ status: 200, message: `working on /` });
  } catch (error) {
    res.status(500).json({ status: 500, message: `not implemented` });
  }
});

module.exports = server;
