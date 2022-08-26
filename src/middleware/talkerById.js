const readJson = require('../readJson');

async function talkerId(req, res, next) {
    const id = Number(req.params.id);
    const talkers = await readJson.readJson();
    const talker = talkers.find((t) => t.id === id);
    if (talker) {
        return res.status(200).json(talker);
      } 
       res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
       next();
}   

module.exports = { talkerId };