import "../widget-styles.scss";

export const ModalidadeWidget = (props: any) => {
  const modalidades = [
    {
      id: 1,
      handler: props.actionProvider.handleTipoCurso,
      type: "100% EAD",
    },
    {
      id: 2,
      handler: props.actionProvider.handleTipoCurso,
      type: "Presencial",
    },
    {
      id: 3,
      handler: props.actionProvider.handleTipoCurso,
      type: "Semi-Presencial",
    },
  ];

  return (
    <div className="modalidades-options-container">
      {modalidades.map((modalidade) => (
        <div
          key={modalidade.id}
          onClick={modalidade.handler}
          className="modalidade searched-option-button bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded flex cursor-pointer"
        >
          {modalidade.type}
        </div>
      ))}
    </div>
  );
};
