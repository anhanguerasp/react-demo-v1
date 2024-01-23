import { AnhangueraLogo } from "../../reuseable/logos/anhanguera/anhangueraLogo";
import { DominosLogo } from "../../reuseable/logos/dominos/dominosLogo";
import { BasicTitle } from "../../reuseable/title/BasicTitle";
import styles from "./colaborators.module.scss";

export const Colaborators = () => {
  return (
    <section className={styles.colaborators}>
      <div className={styles.colaboratorsContainer}>
        <div className={styles.gridLogos}>
          <AnhangueraLogo />
          <DominosLogo />
        </div>
        <BasicTitle content="PARA OS COLABORADORES E FAMILIARES DA EQUIPE DOMINO’S: CONFIRA OS BENEFÍCIOS!" />
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
        <p className={styles.condicoes}>*confira condições</p>
      </div>
    </section>
  );
};
