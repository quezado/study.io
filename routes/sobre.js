var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/stylesheets/sobre.css">
    <link rel="icon" href="/images/icon.png">
    <title>Study.io</title>
</head>
<header>
    <div>
        <a href="/">
        <button data-text="Awesome" class="buttonBetter">
            <span class="actual-text">&nbsp;study.io&nbsp;</span>
            <span class="hover-text" aria-hidden="true">&nbsp;study.io&nbsp;</span>
        </button>
        </a>
    </div>
    <nav>
        <div id="navTotal">
            <div class="navTexts">
                <p><a class="navtex" href="/">Início</a></p>
                <p><a class="navtex" href="/cursos">Cursos</a></p>
                <p><a class="navtex" href="/sobre">Sobre</a></p>
            </div>
            <div>
                <a href="/entrar">
                <button type="button" class="loginButton">Entrar</button>
                </a>
            </div>
        </div>
    </nav>
</header>

<body>

<section class="corpo">
    <div class="maintitle">Conheça mais sobre nós</div>
    <div class="subtitles">Criação</div>
    <div class="text">Feito com a intenção de ajudar pessoas que tem o desejo de aprender cada vez mais, e nunca se limitar.<br>Criados e idealizado em 2023, somos muito recentes no mercado, mas buscamos crescer cada dia mais, e <br>contamos com a sua ajuda pra isso.</div>
    <div class="subtitles">Missão</div>
    <div class="text">Esperamos crescer junto ao usuário, proporcionar um estudo e indicações de qualidade para que seu aprendizado<br>seja aproveitado da melhor maneira possível, e que você se torne, não só um profissional, mas uma pessoa melhor. <br>Estamos sempre em busca de tornar STUDY.IO™ um local em que o usuário se sinta acolhido, e tenha prazer em estudar os <br>conteúdos que indicamos e, futuramente, criamos. Tenha em mente que todas as indicações que fazemos no site está <br>baseado em nossas experiências, e asseguramos a qualidade do conteúdo que disponibilizamos.</div>
    <div class="finaltext">Toda a equipe STUDY.IO™ gostaria de agradecer seu acesso em nosso site, se sinta a vontade para interagir conosco em nossas <br>redes sociais, e caso deseje fazer algum comentário, indicação ou reclamação, nosso e-mail está sempre disponível para você<br>study.io@outlook.com</div>


</section>

    
    <script>
    </script>
</body>
</html>
  `);
});

module.exports = router;
