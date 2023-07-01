const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.get('/', (req, res, next) => {
  res.render('entrar', { title: 'Entrar | Study.io' });
});

router.post('/', async (req, res, next) => {
  const { email, senha } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).render('entrar', { title: 'Entrar | Study.io', error: 'Credenciais inválidas' });
    }

    const match = await bcrypt.compare(senha, user.senha);

    if (!match) {
      return res.status(401).render('entrar', { title: 'Entrar | Study.io', error: 'Credenciais inválidas' });
    }

    res.redirect('/'); 

  } catch (error) {
    next(error);
  }
});

module.exports = router;
