import "./colab.scss";
export const Colaborators = () => {
  return (
    <section className="colaboradores">
      <div className="colaboradores-container">
        <div className="grid-logos">
          <img src="/img/logo.svg" alt="logo" />
          <img src=".img/logo-dominos.svg" alt="" />
        </div>
        <h2>
          Para os colaboradores e familiares da equipe domino’s: confira os
          benefícios!
        </h2>
        <p>
          A parceria com a Pizzaria Domino’s trouxe benefícios para seus
          colaboradores e familiares! Matricule-se informando ser um colaborador
          Domino’s e ganhe <strong>20% de desconto*</strong> na sua mensalidade.{" "}
        </p>
        <p>
          *E tem mais! pagando até o quinto dia útil você obtém{" "}
          <strong>mais 10% de desconto!</strong>{" "}
        </p>
        <p>Veja a lista de cursos disponibilizados nos catálogos abaixo: </p>
        <p className="condicoes-d">*confira condições</p>
      </div>
    </section>
  );
};
