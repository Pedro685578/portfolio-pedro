document.addEventListener('DOMContentLoaded', function() {
    // Botão e opções de acessibilidade
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    // Abrir/fechar menu de acessibilidade
    botaoDeAcessibilidade.addEventListener('click', function() {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });

    // Acessibilidade: aumentar/diminuir fonte e contraste
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function() {
        if (tamanhoAtualFonte > 0.6) {
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });

    alternaContraste.addEventListener('click', function() {
        document.body.classList.toggle('alto-contraste');
    });
});

// ScrollReveal para animações de entrada
ScrollReveal().reveal('header', { delay: 300, origin: 'top', distance: '50px' });
ScrollReveal().reveal('#sobre', { delay: 500, origin: 'left', distance: '50px' });
ScrollReveal().reveal('#projetos', { delay: 700, origin: 'right', distance: '50px' });
ScrollReveal().reveal('#contato', { delay: 900, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('footer', { delay: 1000, origin: 'bottom', distance: '50px' });
