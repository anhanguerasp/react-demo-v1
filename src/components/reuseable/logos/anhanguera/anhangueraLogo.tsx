import { NavLink } from "react-router-dom";
import styles from "./anhangueraLogo.module.scss";

export const AnhangueraLogo = () => {
  return (
    <div className={styles.logo}>
      <NavLink to={"../"} className="dark:hidden">
        <div
          className="bg"
          style={{ width: "120px", height: "30px" }}
          //src="/img/logo.svg"
          //alt="logo Anhanguera"
          //width="323"
          //height="60"
        ></div>
      </NavLink>
    </div>
  );
};
