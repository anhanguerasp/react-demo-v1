export function scrollDown() {
  // Obtém a posição atual da janela
  const currentPosition = window.scrollY;

  // Define a posição de destino (pode ajustar essa parte de acordo com sua necessidade)
  const targetPosition = currentPosition + 300; // Role 300 pixels para baixo

  // Anima a rolagem suavemente
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth", // Essa opção faz a rolagem ser suave
  });
}

export const teste = () => {
  return "teste";
};
