'use strict';
const app = require('./app');

const { PORT, DATABASE_URL } = require('./config');
const NODE_ENV = process.env.NODE_ENV;


app.set('db', db);
app.listen(PORT, () => {
  console.log(`Server listening in ${NODE_ENV}`);
});
