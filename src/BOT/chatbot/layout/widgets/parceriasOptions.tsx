import { useState } from "react";

export const ParceriasLista = (props: any) => {
  const [showAmigoPix, setShowAmigoPix] = useState(false);
  const [showProfPix, setShowProfPix] = useState(false);
  const [showDominos, setShowDominos] = useState(false);
  const [showAport, setShowAport] = useState(false);
  const [showAcirc, setShowAcirc] = useState(false);
  const [showAmai, setShowAmai] = useState(false);
  const [showUnegro, setShowUnegro] = useState(false);

  const handleShowAmigoPix = () => {
    setShowAmigoPix(!showAmigoPix);
  };

  const handleShowProfPix = () => {
    setShowProfPix(!showProfPix);
  };

  const handleDominos = () => {
    setShowDominos(!showDominos);
  };

  const handleAport = () => {
    setShowAport(!showAport);
  };

  const handleShowAcirc = () => {
    setShowAcirc(!showAcirc);
  };

  const handleShowAmai = () => {
    setShowAmai(!showAmai);
  };

  const handleShowUnegro = () => {
    setShowUnegro(!showUnegro);
  };

  const options = [
    {
      text: "Amigo Vale Pix",
      //handler: props.actionProvider.handleUnidades,
      id: 1,
      description:
        "Preencha o nosso formulário e receba um pix de R$ 50,00 diretamente na sua conta!!",
      handleShow: handleShowAmigoPix,
      show: showAmigoPix,
      link: "https://anhanguerasp.com.br/parcerias/amigovalepix",
    },
    {
      text: "Professor Vale Pix",
      /*handler: props.actionProvider.handleTeste*/ id: 2,
      description:
        "Preencha o nosso formulário e receba um pix de R$ 70,00 diretamente na sua conta!!",
      handleShow: handleShowProfPix,
      show: showProfPix,
      link: "https://anhanguerasp.com.br/parcerias/professorvalepix",
    },
    {
      text: "Domino's",
      /*handler: props.actionProvider.handleContatos,*/ id: 3,
      description:
        "Estudante e Colaborador, fique por dentro dos benefícios que a nossa parceria com a Domino's trouxe a vocês.",
      handleShow: handleDominos,
      show: showDominos,
      link: "https://anhanguerasp.com.br/parcerias/dominos",
    },
    {
      text: "Aport",
      /*handler: props.actionProvider.handleContatos,*/ id: 4,
      description:
        "Cliente Aport, descubra junto com a Anhanguera o seu futuro acadêmico.",
      handleShow: handleAport,
      show: showAport,
      link: "https://anhanguerasp.com.br/parcerias/aport",
    },
    {
      text: "Acirc",
      /*handler: props.actionProvider.handleContatos,*/ id: 5,
      description:
        "Agora, a Anhanguera Rio Claro estabeleceu uma parceria que traz consigo uma gama de benefícios excepcionais para os membros da Associação Comercial e Industrial de Rio Claro.",
      handleShow: handleShowAcirc,
      show: showAcirc,
      link: "https://anhanguerasp.com.br/parcerias/acirc",
    },
    {
      text: "Amai",
      /*handler: props.actionProvider.handleContatos,*/ id: 6,
      description: "Conheça a Amai e seus projetos de inclusão social.",
      handleShow: handleShowAmai,
      show: showAmai,
      link: "https://anhanguerasp.com.br/parcerias/amai",
    },
    {
      text: "Unegro",
      /*handler: props.actionProvider.handleContatos,*/ id: 7,
      description:
        "Saiba como a parceria entre a Anhanguera e a UNEGRO contribui para o acesso de pessoas negras à educação superior.",
      handleShow: handleShowUnegro,
      show: showUnegro,
      link: "https://anhanguerasp.com.br/parcerias/unegro",
    },
  ];

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        {options.map((partner) => (
          <div>
            <div
              role="button"
              className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 hover:bg-orange-500 hover:text-white font-semibold"
              key={partner.id}
              onClick={partner.handleShow}
            >
              {partner.text}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </div>
            <span
              className={`text-sm text-gray-500 dark:text-gray-400 ${
                partner.show ? "" : "hidden"
              }`}
            >
              {partner.description}
              <p className="mt-4 mb-6 font-semibold">
                Se interessou? Clique{" "}
                <a
                  href={partner.link}
                  target="_blank"
                  className="text-orange-500 font-bold"
                >
                  aqui
                </a>{" "}
                para mais detalhes.
              </p>
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
};
