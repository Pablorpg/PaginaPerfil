function MudarModo() {
  const mudar = document.getElementById("mudarModo");

  mudar.addEventListener("click", () => {
    document.body.classList.toggle("modoEscuro");
    if (document.body.classList.contains("modoEscuro")) {
      mudar.textContent = "Desativar Modo Escuro";
    } else {
      mudar.textContent = "Ativar Modo Escuro";
    }
  });
}

MudarModo();
