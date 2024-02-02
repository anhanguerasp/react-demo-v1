import styles from "./valepix-style.module.scss";

export const ValePixSection = () => {
  return (
    <section
      className={`${styles.amigopix} mt-14`}
      style={{ position: "relative" }}
    >
      <div className={`${styles.introPix}`}>
        <img src="/img/chapeu-stick.svg" alt="logo stick" />
        <h1>ESTUDE GRÁTIS! PAGUE SUA MENSALIDADE INDICANDO UM AMIGO!</h1>
      </div>
      <p>Veja como funciona:</p>
      {/*<div
        style={{
          width: "290px",
          height: "130px",
          backgroundColor: "red",
          position: "absolute",
          top: 22,
          right: 40,
          borderRadius: "7px",
          padding: "5px 10px",
          fontFamily: "Apotek, sans-serif",
        }}
      >
        <img
          src="/img/warning-icon.svg"
          style={{ width: "50px", marginTop: "5px" }}
        />

        <h6 style={{ fontSize: "15px" }}>
          Os valores da promoção Amigo vale Pix foram atualizados!!! Agora a
          promoção paga <span style={{ fontWeight: "600" }}>R$ 50,00</span> pós
          fechamento de matrícula
        </h6>
      </div>*/}
      <img
        className={styles.diagrama}
        src="/img/novo-diagrama-amigo.png"
        alt="como funciona"
      />
      <img
        className={styles.diagramaMobile}
        src="/img/novo-diagrama-amigo-mobile.png"
        alt="como funciona"
      />
    </section>
  );
};
