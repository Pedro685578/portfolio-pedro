
---

## 📜 `script.js` – Acessibilidade  

```javascript
// Script de acessibilidade
document.addEventListener("DOMContentLoaded", () => {
  const botaoMenu = document.getElementById("botao-acessibilidade");
  const opcoes = document.getElementById("opcoes-acessibilidade");
  const aumentar = document.getElementById("aumentar-fonte");
  const diminuir = document.getElementById("diminuir-fonte");
  const contraste = document.getElementById("alterna-contraste");

  let tamanhoFonte = 100;

  // Alternar exibição do menu
  botaoMenu.addEventListener("click", () => {
    opcoes.classList.toggle("apresenta-lista");
    const expandido = botaoMenu.getAttribute("aria-expanded") === "true";
    botaoMenu.setAttribute("aria-expanded", !expandido);
  });

  // Aumentar fonte
  aumentar.addEventListener("click", () => {
    tamanhoFonte += 10;
    document.body.style.fontSize = `${tamanhoFonte}%`;
  });

  // Diminuir fonte
  diminuir.addEventListener("click", () => {
    if (tamanhoFonte > 50) {
      tamanhoFonte -= 10;
      document.body.style.fontSize = `${tamanhoFonte}%`;
    }
  });

  // Alternar contraste
  contraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
  });
});

// Estilo adicional para contraste (adicione no style.css)
/*
.alto-contraste {
  background: #000 !important;
  color: #fff !important;
}
.alto-contraste a {
  color: #0ff !important;
}
.alto-contraste .card {
  background: #222 !important;
}
*/
