const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const { readJson } = require('./readJson');
const { talkerId } = require('./middleware/talkerById');
const validationEmail = require('./middleware/validationEmail');
const validationPassword = require('./middleware/validationPassword');
const validationToken = require('./middleware/validationToken');
const validationName = require('./middleware/validationName');
const validationTalk = require('./middleware/validationTalk');
const validationDate = require('./middleware/validationDate');

const app = express();
app.use(bodyParser.json());
app.use(express.json());

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

// requisito 3 Crie o endpoint POST /login -----------------
app.post('/login', validationEmail, validationPassword, (req, res) => {
  const { email, password } = req.params;
  const token = Math.random().toFixed(16).toString(36).substring(2);
  if (!email && !password) {
    res.status(200).json({
      token,
    });
  }
});

// requisito 5 Crie o endpoint POST /talker--------------------
app.post('/talker', 
validationToken, validationName, validationTalk, validationDate, async (req, res) => {
  const talker = req.body;
  const talkers = await readJson();
  const novoTalkers = { id: talkers[talkers.length - 1].id + 1, ...talker };

  talkers.push(novoTalkers);
  await fs.writeFile('src/talker.json', JSON.stringify(talkers));
  return res.status(201).json(novoTalkers);
});

app.listen(PORT, () => {
  console.log('Online');
});