import { AnhangueraLogo } from "../../reuseable/logos/anhanguera/anhangueraLogo";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <AnhangueraLogo />

      <div className={styles.headerLinks}>
        <a href="./index.html">
          <img
            className="excluir-alerta"
            src="/img/icone casa.png"
            alt="Voltar para home"
            width="20"
            height="16"
          />
        </a>
        <a href="./graduacao.html" className={styles.links}>
          Graduação
        </a>
        <a href="./posgraduacao.html" className={styles.links}>
          Pós-Graduação
        </a>
        <a href="./unidades.html" className={styles.links}>
          Unidades
        </a>
        <a href="./Infraestrutura.html" className={styles.links}>
          Infraestrutura
        </a>
      </div>
    </div>
  );
};
