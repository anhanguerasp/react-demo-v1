import "../widget-styles.scss";

export const TipoCurosdeWidget = (props: any) => {
  const tipos = [
    {
      id: 1,
      handler: props.actionProvider.handleGraduacaoCursos,
      type: "Graduação",
    },
    {
      id: 2,
      handler: props.actionProvider.handlePos,
      type: "Pós-graduação",
    },
    {
      id: 3,
      handler: props.actionProvider.handleTecnicoCursos,
      type: "Cursos técnicos",
    },
    /*{
      id: 4,
      handler: props.actionProvider,
      type: "Cursos livres",
    },*/
  ];

  return (
    <div className="modalidades-options-container">
      {tipos.map((tipo) => (
        <div
          key={tipo.id}
          onClick={tipo.handler}
          className="modalidade searched-option-button bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded flex cursor-pointer"
        >
          {tipo.type}
        </div>
      ))}
    </div>
  );
};
