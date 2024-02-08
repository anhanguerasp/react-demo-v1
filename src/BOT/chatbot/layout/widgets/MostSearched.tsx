import "./widget-styles.scss";

export const MostSearched = (props: any) => {
  const options = [
    {
      text: "Unidades",
      handler: props.actionProvider.handleUnidades,
      id: 1,
    },
    { text: "Contato", handler: props.actionProvider.handleContatos, id: 2 },
    { text: "Parceiros", handler: props.actionProvider.handlePartners, id: 3 },
    {
      text: "Nossos Cursos",
      handler: props.actionProvider.handleModalidades,
      id: 4,
    },
    {
      text: "Redes Sociais",
      handler: props.actionProvider.handleSocial,
      id: 5,
    },
    { text: "Digite sua dúvida abaixo.", id: 6 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="searched-option-button bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded flex"
      key={option.id}
      onClick={option.handler}
      style={{ minWidth: 0 }}
    >
      {option.text}
    </button>
  ));

  return <div className="searched-options-container flex">{optionsMarkup}</div>;
};
