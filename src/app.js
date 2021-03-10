'use strict';

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');

const { stateData } = require('./store');
const eligibilityRouter = require('./eligibilityRouter/eligibility-router');
const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());


app.use('/eligible', eligibilityRouter);

app.get('/', (req, res) => {
  res.send(stateData);
});
app.get('/:state', (req, res) => {
  let state = stateData.filter(
    (x) =>
      x.abbr.toLowerCase() == req.params.state.toLowerCase() ||
      x.name.toLowerCase() == req.params.state.toLowerCase()
  );
  res.send(state);
});

app.get('/:state/fullplan', (req, res) => {
  let state = stateData.filter(
    (x) =>
      x.abbr.toLowerCase() == req.params.state.toLowerCase() ||
      x.name.toLowerCase() == req.params.state.toLowerCase()
  );
  console.log(state);
  res.send(state[0].fullPlan);
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (process.env.NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.log(error);
    response = { message: error.messager, error };
  }
  res.status(500).json(response);
});

module.exports = app;
