const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Cadastro = require('../models/cadastro');
module.exports = router;

router.post('/', (req, res) => {
  const { nome, email, senha, telefone } = req.body;

  const novoCadastro = new Cadastro({
    nome,
    email,
    senha,
    telefone,
  });

  novoCadastro.save()
  .then(() => {
    res.send('Cadastro realizado com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao realizar cadastro:', err);
    res.status(500).send('Erro ao realizar cadastro.');
  });
});



const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const inicioRouter = require('./routes/inicio');
app.use('/inicio', inicioRouter);

const cadastroRouter = require('./routes/cadastro');
app.use('/cadastro', cadastroRouter);

const cursosRouter = require('./routes/cursos');
app.use('/cursos', cursosRouter);

const entrarRouter = require('./routes/entrar');
app.use('/entrar', entrarRouter);

const sobreRouter = require('./routes/sobre');
app.use('/sobre', sobreRouter);

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('O servidor está rodando na porta 3000.');
});
