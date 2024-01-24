import { Link } from "react-router-dom";
import { AnhangueraLogo } from "../../reuseable/logos/anhanguera/anhangueraLogo";
import styles from "./header.module.scss";
import Sidebar from "../sidebar/sidebar";
import { useState } from "react";

export const Header = () => {
  const [showSide, setShowSide] = useState(false);
  return (
    <div className={styles.header}>
      <div
        className={styles.sideBarWrapper}
        onClick={() => setShowSide(!showSide)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Sidebar show={showSide} />
      <AnhangueraLogo />

      <div className={styles.headerLinks}>
        <Link to="../">
          <img
            className="excluir-alerta"
            src="/img/icone casa.png"
            alt="Voltar para home"
            width="20"
            height="16"
          />
        </Link>
        <Link to="../institucional/graduacao" className={styles.links}>
          Graduação
        </Link>
        <Link to="../institucional/posgraduacao" className={styles.links}>
          Pós-Graduação
        </Link>
        <Link to="../institucional/unidades" className={styles.links}>
          Unidades
        </Link>
        <Link to="../institucional/infraestrutura" className={styles.links}>
          Infraestrutura
        </Link>
      </div>
    </div>
  );
};
