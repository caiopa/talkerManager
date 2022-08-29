function validationTalk(req, res, next) {
    const { talk } = req.body;
    if (!talk) {
        return res.status(400).json({ message: 'O campo "talk" é obrigatório',
          });
    }
    if (talk.rate === undefined) {
        return res.status(400).json({ message: 'O campo "rate" é obrigatório',
          });
    }
    if (talk.rate < 1 || talk.rate > 5) {
        return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5',
          });
    }
    next();
}

module.exports = validationTalk;