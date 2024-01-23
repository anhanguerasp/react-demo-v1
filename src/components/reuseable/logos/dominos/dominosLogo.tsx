import styles from "./dominosLogo.module.scss";

export const DominosLogo = () => {
  return (
    <div className={styles.logo}>
      <img
        src="/img/logo-dominos.svg"
        alt="logo Dominos"
        width="323"
        height="60"
      />
    </div>
  );
};
