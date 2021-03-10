# COVID-19 Vaccine Rollout API

## Overview 
The rollout of the COVID-19 Vaccines in the US, while guided by the CDC and the Federal Government, has largely been left up to the individual states. This API was created to serve a single source for information on the vaccine rollout across the country

The API can be accessed at: https://immense-mesa-59678.herokuapp.com/


## Current Resources
Currently, the API only provides the raw data regarding vaccine rollout. We have plans to add much more functionality and information including: 
- example lists to elaborate on criteria, such as "essential worker" 
- endpoints to automatically determine an individual's vaccine eligibility 


## Data Model 

Every state is represented by an object containing all relevant information regarding their vaccine rollout in the following format: 

```
{
  name: 'string',
  abbr: 'string',
  fullPlan: boolean,
  fullTimeline: boolean,
  url: 'string',
  phases: [
    {
      name: 'string',
      criteria: [
        {category: ['string']},
        {category: integer}
      ],
      current: boolean,
      effectiveDate: 'string'
    }
  ],
  lastUpdate: 'string' 
}
```
name: the full name of the state the data pertains to 

abbr: the abbreviation for that state

fullPlan: whether or not the state has published a plan that goes 
all the way through vaccinating the general populous 

fullTimeline: whether or not, for the planned phases a state HAS published, they have also published at least an estimated timeline for when different phases will go into effect. 

url: a link to move information about the state's vaccine rollout 

phases: an array of objects, each representing a given phase 

  within a given phase object: 
    name: the name of the phase. In cases where a state has not explicitly named phases, we have created a naming convention that makes sense, usually just numbers. 

  criteria: an array of objects, each representing a set of criteria for an individual to be eligible for the vaccine. For someone to be eligible in that phase, they must completely match ALL criteria inside of a given object. For example, if the criteria array is: `[{ age: 65 }, { age: 16, medicalCondition: 1 }]` an individual must be either 65 + years old, or be at least 16 years old AND have at least 1 qualifying medical condition.

  current: whether or not this phase is currently active,
    effectiveDate: a string representing the expected date that this phase will be activated, or 'TBD' 

lastUpdate: a string representing the last time that this state's data was updated in the API. 

### Example Data 

```
{
    name: 'COLORADO',
    abbr: 'CO',
    fullPlan: true,
    fullTimeline: false,
    url:
      'https://covid19.colorado.gov/for-coloradans/vaccine/vaccine-for-coloradans',
    phases: [
      {
        name: '1A',
        criteria: [
          { occupation: ['frontline healthcare', 'LTC'] },
          { living: ['LTC'] },
        ],
        current: true,
      },
      {
        name: '1B1',
        criteria: [
          { age: 70 },
          { occupation: ['healthcare', 'first responder'] },
        ],
        current: true,
      },
      {
        name: '1B2',
        criteria: [
          { age: 65 },
          { occupation: ['education', 'govt essential'] },
        ],
        current: true,
      },
      {
        name: '1B3',
        criteria: [
          { occupation: ['frontline essential'] },
          { age: 16, medicalCondition: 2 },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '2',
        criteria: [
          { age: 60 },
          { age: 16, medicalCondition: 1 },
          { occupation: ['govt'] },
          {
            age: 16,
            special:
              'received placebo during COVID-19 vaccine clinical trial',
          },
        ],
        current: false,
        effectiveDate: 'TBD',
      },
      {
        name: '3',
        criteria: [{ age: 16 }],
        current: false,
        effectiveDate: 'TBD',
      },
    ],
    lastUpdate: '03-03-2021',
  },
  ```
## Endpoints

Main URL: https://immense-mesa-59678.herokuapp.com/

#### GET /
 A GET request on the root URL will return the entirety of the vaccine rollout data in JSON format. 

 NOTE: This will return over 2400 lines of JSON. 

 #### GET/:state
 A GET request to /:state, (where 'state' can be the abbreviation code for the state, or the full state name) will return the vaccine rollout data for that state.n  

#### GET /:state/fullplan 
Returns true if state has published a vaccine rollout plan through to general population, false if not.


## Setting up a local version 

Complete the following steps to create your own local version of the COVID Vaccine API:

1. Clone this repository to your local machine `git clone https://github.com/arcoleburn/covid-API.git NEW-PROJECT-NAME`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. `npm start` or `npm run dev` to launch

