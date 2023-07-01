const express = require('express');
const router = express.Router();
const User = require('../models/User'); 
router.get('/', function(req, res, next) {
  res.render('cadastro', { title: 'Criar conta | Study.io' });
});

router.post('/', async function(req, res, next) {
  const nome = req.body.nome;
  const email = req.body.email;
  const senha = req.body.senha;
  const telefone = req.body.telefone;

  try {
    const user = new User({
      nome,
      email,
      senha,
      telefone
    });

    await user.save();

    res.redirect('/entrar');

  } catch (error) {
    next(error);
  }
});

module.exports = router;
