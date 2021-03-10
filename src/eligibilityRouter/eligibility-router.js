'use strict';

const express = require('express');
const { stateData } = require('../store');

const eligibilityRouter = express.Router();
// const jsonParser = express.json();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

eligibilityRouter.get(jsonParser, (req, res, next) => {
  const {
    stateAbbr,
    age = 0,
    medicalCondition = 0,
    occupation = 'na',
    living = 'na',
  } = req.query;
  const person = { age, medicalCondition, occupation, living };
  let eligible = false;
  console.log(person)
  const matchState = stateData.filter(
    (state) => state.abbr.toLowerCase() == stateAbbr.toLowerCase()
  )[0];

  let currentCriteria = [];

  for (let i = 0; i < matchState.phases.length; i++) {
    if (matchState.phases[i].current == true) {
      currentCriteria.push(...matchState.phases[i].criteria);
    }
  }
  for (let i = 0; i < currentCriteria.length; i++) {
    let match = true;
    for (let property in currentCriteria[i]) {
      if (property == 'age') {
        if (parseInt(person.age) < currentCriteria[i].age) {
          match = false;
        }
      }
      if (property == 'medicalCondition') {
        if (
          person.medicalCondition <
          currentCriteria[i].medicalCondition
        ) {
          match = false;
        }
      }
      if (property == 'occupation') {
        if (
          !currentCriteria[i].occupation.includes(person.occupation)
        ) {
          match = false;
        }
      }
      if (property == 'living') {
        if (!currentCriteria[i].living.includes(person.living)) {
          match = false;
        }
      }
    }
    if (match) {
      eligible = true;
    }
  }
  console.log('crits', currentCriteria);
  res.send(eligible)
});

module.exports = eligibilityRouter;
