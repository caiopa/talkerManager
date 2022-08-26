const fs = require('fs').promises;
const { join } = require('path');

const pathFile = '../src/talker.json';

async function readJson() {
    try {
        const talkers = await fs.readFile(join(__dirname, pathFile), 'utf-8');
        const talkersJson = JSON.parse(talkers);
        return talkersJson;
    } catch (err) {
        console.log('erro ao ler o arquivo: ', err.message);
     return null;
    }
}

module.exports = {
    readJson,
};