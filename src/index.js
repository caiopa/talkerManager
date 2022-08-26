const express = require('express');
const bodyParser = require('body-parser');
// const { json } = require('body-parser');
const readJson = require('./readJson');
const { talkerId } = require('./middleware/talkerById');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// requisito 1  Crie o endpoint GET /talker -----------------

app.get('/talker', async (_req, res) => {
   const talkers = await readJson.readJson();
    return res.status(200).json(talkers);
});
// requisito 2 Crie o endpoint GET /talker/:id ----------------------

app.get('/talker/:id', talkerId, async (__req, __res) => {
});

app.listen(PORT, () => {
  console.log('Online');
});
