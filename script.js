document.addEventListener("DOMContentLoaded", () => {
  const botaoAcessibilidade = document.getElementById("botao-acessibilidade");
  const opcoes = document.getElementById("opcoes-acessibilidade");
  const aumentarFonte = document.getElementById("aumentar-fonte");
  const diminuirFonte = document.getElementById("diminuir-fonte");
  const alternaContraste = document.getElementById("alterna-contraste");

  // 👉 Estado inicial do tamanho da fonte
  let tamanhoFonte = parseFloat(getComputedStyle(document.body).fontSize);

  // 👉 Alterna menu de acessibilidade (abrir/fechar)
  botaoAcessibilidade.addEventListener("click", () => {
    botaoAcessibilidade.classList.toggle("rotacao-botao");
    opcoes.classList.toggle("apresenta-lista");

    const expandido = botaoAcessibilidade.getAttribute("aria-expanded") === "true";
    botaoAcessibilidade.setAttribute("aria-expanded", !expandido);
  });

  // 👉 Aumentar fonte
  aumentarFonte.addEventListener("click", () => {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
  });

  // 👉 Diminuir fonte
  diminuirFonte.addEventListener("click", () => {
    tamanhoFonte -= 2;
    if (tamanhoFonte < 10) tamanhoFonte = 10; // evita ficar muito pequeno
    document.body.style.fontSize = tamanhoFonte + "px";
  });

  // 👉 Alternar alto contraste
  alternaContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
  });
});
