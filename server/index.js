const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(express.static('client/dist'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});
