/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(express.static('client/dist'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World');
});
