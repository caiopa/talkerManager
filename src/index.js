const express = require('express');
const bodyParser = require('body-parser');
const talkers = require('./talker.json');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// requisito 1  Crie o endpoint GET /talker

app.get('/talker', (_req, res) => {
  if (talkers) {
    console.log(talkers);
    return res.status(200).json(talkers);
  } if (talkers.length === 0) {
    return res.status(200).json([]);
  }
});

app.listen(PORT, () => {
  console.log('Online');
});
