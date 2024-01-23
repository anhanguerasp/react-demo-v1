import styles from "./valepix-style.module.scss";

export const ValePixSection = () => {
  return (
    <section className={styles.amigopix}>
      <div className={styles.introPix}>
        <img src="/img/chapeu-stick.svg" alt="logo stick" />
        <h1>ESTUDE GRÁTIS! PAGUE SUA MENSALIDADE INDICANDO UM AMIGO!</h1>
      </div>
      <p>Veja como funciona:</p>
      <img
        className="diagrama"
        src="/img/diagrama-amigopix.png"
        alt="como funciona"
      />
      <img
        className="diagrama-mobile"
        src="/img/diagrama-amigopix-mobile.png"
        alt="como funciona"
      />
    </section>
  );
};
