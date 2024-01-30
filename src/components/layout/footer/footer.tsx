import { Link } from "react-router-dom";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <img
        className={styles.logofooter}
        src="/img/logo.svg"
        width="298"
        height="67"
        alt="AnhangueraSP"
      ></img>

      <div className={styles.footerContact}>
        <h3>Contato</h3>
        <ul className={styles.contactFooter}>
          <li>
            <a href="tel:+5511992283525">+55 11 99228-3525</a>
          </li>
          <li>
            <a href="mailto: contato@anhanguerasp.com.br">
              contato@anhanguerasp.com.br
            </a>
          </li>
        </ul>
        <div className={styles.footerRedes}>
          <a
            target="_blank"
            href="https://www.facebook.com/ComunidadeAnhangueraSP"
          >
            <img
              src="/img/facebook.svg"
              width="32"
              height="32"
              alt="Facebook"
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/anhangueraspoficial/"
          >
            <img
              src="/img/instagram-p.svg"
              width="32"
              height="32"
              alt="Instagram"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/school/anhanguera-sp-oficial"
          >
            <img
              src="/img/linkedin.svg"
              width="32"
              height="32"
              alt="Linkedin"
            />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCXecYFqUtKzven0EERTwvvQ"
          >
            <img src="/img/youtube.svg" width="32" height="32" alt="Youtube" />
          </a>
        </div>
      </div>

      <div className={styles.footerInformations}>
        <h3>Informações</h3>
        <nav>
          <ul>
            <li>
              <Link to="../institucional/graduacao" className="excluir-alerta">
                Graduação
              </Link>
            </li>
            <li>
              <Link
                to="../institucional/posgraduacao"
                className="excluir-alerta"
              >
                Pós-Graduação
              </Link>
            </li>
            <li>
              <Link to="../institucional/unidades" className="excluir-alerta">
                Unidades
              </Link>
            </li>
            <li>
              <Link to="../institucional/politica" className="excluir-alerta">
                Infraestrutura
              </Link>
            </li>
            <li>
              <Link
                to="../institucional/termosdeuso"
                className="excluir-alerta"
              >
                Termos de Uso
              </Link>
            </li>
            <li>
              <Link to="../institucional/politica" className="excluir-alerta">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <p className={styles.footerCopy}>Grupo AnhangueraSP ©</p>
    </div>
  );
};
