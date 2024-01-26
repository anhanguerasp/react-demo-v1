import { NavLink } from "react-router-dom";
import styles from "./anhangueraLogo.module.scss";

export const AnhangueraLogo = () => {
  return (
    <div className={styles.logo}>
      <NavLink to={"../"}>
        <img
          src="/img/logo.svg"
          alt="logo Anhanguera"
          width="323"
          height="60"
        />
      </NavLink>
    </div>
  );
};
