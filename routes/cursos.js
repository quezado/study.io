var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/stylesheets/courses.css">
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
    <section class="coursesbody">
        <div class="coursestitle">Comece a aprender agora!</section>
        <div class="coursessubtitle">Veja os topicos que oferecemos para<br>impulsionar seu conhecimento</section>
        <section class="coursescards">
            <section class="card">
                <div class="blue"><img src="images/camera.png" class="iconmini" alt="audiovisual"></div>
                <section class="texto">
                    <div class="title">Audiovisual</div>
                    <div class="sub">Explore os fundamentos e técnicas avançadas de produção<br>cinematográfica, aprendendo a contar histórias cativantes e<br>criar experiências audiovisuais envolventes. Desperte seu <br>talento criativo e mergulhe no mundo do audiovisual.</div>
                </section>
            </section>
            <section class="card">
                <div class="blue"><img src="images/dsng-ico.png" class="iconmini" alt="audiovisual"></div>
                <section class="texto">
                    <div class="title">Design</div>
                    <div class="sub">Desenvolva suas habilidades em criação visual e design<br>de interfaces. Aprenda técnicas avançadas de design<br>e crie projetos inovadores que impactam e cativam seu<br>público-alvo.</div>
                </section>
            </section>
            <section class="card">
                <div class="blue"><img src="images/computer.png" class="iconmini" alt="audiovisual"></div>
                <section class="texto">
                    <div class="title">Programação</div>
                    <div class="sub">Aprenda a programar em qualquer linguagem que desejar,<br>buscamos transformá-lo em um programador full-stack,<br>necessário não só para quem deseja ser um profissional, mas tenha vontade de desenvolver suas aplicações</div>
                </section>
            </section>
        </section>
    </section>
    <script>
    </script>
</body>
</html>
  `);
});

module.exports = router;
