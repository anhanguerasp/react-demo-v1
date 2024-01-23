import { Header } from "../header/header";
import { PreHaeder } from "../preHeader/preHeader";
import styles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <PreHaeder />
      <Header />
    </div>
  );
};
