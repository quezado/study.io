var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/stylesheets/style.css">
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
        </div>
    </nav>
</header>
<body>
    <section class="heroSection">
        <div class="heroSetup">
            <div class="heroTitle">
                <h1>Comece sua jornada<br>de conhecimento!</h1>
                <h2>Nosso site te incentiva a desenvolver suas habilidades<br>
                    em diversos campos de conhecimento!</h2>
            </div>
            <div class="heroButtons">
                <a href="/entrar"><button id="buttonAccount">Crie sua conta</button></a>
                <button id="buttonOffers" onclick="scrollToSection()">Nossas ofertas</button>
            </div>
        </div>
        <img id="euSouFODADEMAIS" src="/images/virtual-reality-animate.svg" alt="Ilustração Hero Section">
    </section>
    <section class="homeoffers">
        <section class="homeofferstitle">
            <div class="maintitle">O que quer aprender?</div>
            <div class="subtitle">No momento, nosso acervo ainda não é tão grande, mas trabalhamos<br>diariamente para tornar o site um lugar melhor para você.</div>
        </section>
        <section class="coursescards">
            <section class="cardsquare">
                <section class="cardicon">
                    <img src="/images/camera.png" alt="audiovisual" class="offerminiicon">
                </section>
                <section class="cardtext">
                    <div class="cardtitle">Audiovisual</div>
                    <div class="cardsubtitle">Construa o seu portfólio com um<br>projeto autoral que vai abrir as portas<br>do mercado audiovisual para você.</div>
                </section>
            </section>
            <section class="cardsquare">
                <section class="cardicon">
                    <img src="/images/dsng-ico.png" alt="design" class="offerminiicon">
                </section>
                <section class="cardtext">
                    <div class="cardtitle">Design</div>
                    <div class="cardsubtitle">Construa o seu portfólio com um<br>projeto autoral que vai abrir as portas<br>do mercado audiovisual para você.</div>
                </section>
            </section>
            <section class="cardsquare">
                <section class="cardicon">
                    <img src="/images/computer.png" alt="dev" class="offerminiicon">
                </section>
                <section class="cardtext">
                    <div class="cardtitle">Programação</div>
                    <div class="cardsubtitle">Domine as principais linguagens do,<br>mercado, e construa aplicações<br>responsivas e dinâmicas.</div>
                </section>
            </section>
        </section>
    </section>

    <script>
            function scrollToSection() {
    const section = document.querySelector('.homeoffers');
    section.scrollIntoView({ behavior: 'smooth' });
}
    </script>
</body>
</html>
  `);
});

module.exports = router;
