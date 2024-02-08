function CPFMask(e: any) {
  if (!e) {
    return "";
  }
  return e.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
}

export const handleCPF = (event: any) => {
  let input = event.target;
  input.value = cpfMask(input.value);
};

export const cpfMask = (value: any) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};
