const fs = require('fs').promises;
const { join } = require('path');

const pathFile = '../src/talker.json';

async function readJson() {
    try {
        const Alltalkers = await fs.readFile(join(__dirname, pathFile), 'utf-8');
        const talkersJson = JSON.parse(Alltalkers);
        return talkersJson;
    } catch (err) {
        console.log('erro ao ler o arquivo: ', err.message);
     return null;
    }
}

const writeTalkerFile = async (file) => {
    await fs.writeFile(join(__dirname, pathFile), JSON.stringify(file));
  };
async function changeTalker(id, talkers) {
    const arrayTalker = await readJson();
 
    let resposta; 

  for (let i = 0; i < arrayTalker.length; i += 1) {
    if (arrayTalker[i].id === Number(id)) {
        arrayTalker[i].name = talkers.name;
        arrayTalker[i].age = talkers.age;
        arrayTalker[i].talk.watchedAt = talkers.talk.watchedAt;
        arrayTalker[i].talk.rate = talkers.talk.rate;

        resposta = arrayTalker[i];
    }
} 
await writeTalkerFile(arrayTalker);
return resposta;
}

async function deleteTalker(id) {
    const talkers = await readJson();

    const talkerToDelete = talkers.filter((t) => t.id !== id);
   await writeTalkerFile(talkerToDelete);
}

module.exports = {
    readJson,
    changeTalker,
    deleteTalker,
};
