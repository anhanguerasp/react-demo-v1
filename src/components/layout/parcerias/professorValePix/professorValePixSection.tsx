import styles from "./professorvalepix-style.module.scss";

export const ProfessorValePixSection = () => {
  return (
    <section className={styles.amigopix}>
      <div className={styles.introPix}>
        <img src="/img/chapeu-stick.svg" alt="logo stick" />
        <h1>Indique um amigo e ganhe uma renda extra </h1>
      </div>
      <p>Veja como funciona:</p>
      <img
        className={styles.diagrama}
        src="/img/diagrama-profpix.png"
        alt="como funciona"
      />
      <img
        className={styles.diagramaMobile}
        src="/img/diagrama-profpix-mobile.png"
        alt="como funciona"
      />
    </section>
  );
};

/* <section className={styles.amigopix}>
<div className={styles.introPix}>
  <img src="/img/chapeu-stick.svg" alt="logo stick"/>
  <h1>Indique um amigo e ganhe uma renda <br>extra<br> </h1>
</div>
<p>Veja como funciona:</p>
<img className={styles.diagrama} src="/img/diagrama-profpix.png" alt="como funciona"/>
<img className={styles.diagramaMobile} src="/img/diagrama-profpix-mobile.png" alt="como funciona"/>
</section>'*/
