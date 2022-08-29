function validationDate(req, res, next) {
    const { talk } = req.body;
    const regexDate = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

    const data = regexDate.test(talk.watchedAt);
    if (!talk.watchedAt) {
        return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório',
          });
    }
    if (!data) {
        return res.status(400)
        .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
    }

    next();
}

module.exports = validationDate;