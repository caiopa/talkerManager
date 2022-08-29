function validationEmail(req, res, next) {
    const { email } = req.body;
    const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const userEmail = regexEmail.test(email);
    console.log(email);
    if (!email) {
        return res.status(400).json({
            message: 'O campo "email" é obrigatório',
          });
    }
    if (!userEmail) {
      return res.status(400).json({
            message: 'O "email" deve ter o formato "email@email.com"',
          });
    }
    next();
}

module.exports = validationEmail;