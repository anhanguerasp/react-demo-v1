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

export const handlePhone = (event: any) => {
  let input = event.target;
  input.value = phoneMask(input.value);
};

const phoneMask = (value: any) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};
