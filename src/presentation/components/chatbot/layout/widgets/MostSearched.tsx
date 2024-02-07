import "./widget-styles.scss";

export const MostSearched = (props: any) => {
  const options = [
    {
      text: "unidades",
      handler: props.actionProvider.handleUnidades,
      id: 1,
    },
    { text: "teste", handler: props.actionProvider.handleTeste, id: 2 },
    { text: "contato", handler: props.actionProvider.handleContatos, id: 3 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="searched-options-container">{optionsMarkup}</div>;
};
