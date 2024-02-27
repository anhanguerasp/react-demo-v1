import styles from "./aport-style.module.scss";

export const AportSection = () => {
  return (
    <section className={styles.aport}>
      <div className={styles.aportContainer}>
        <div className={styles.introG}>
          <img src="/img/aport-logo.svg" alt="logo stick" />
          <h1
            className={`${styles.tituloPos} mt-12 text-4xl md:text-5xl lg: text-5xl font-semibold`}
          >
            Cliente APORT, venha transformar o seu futuro acadêmico!
          </h1>
        </div>
        <p>
          A Anhanguera SP disponibiliza uma ampla variedade de oportunidades
          acadêmicas, com mais de 100 cursos de graduação, mais de 500 cursos de
          pós-graduação e 9 cursos técnicos à sua disposição. Além disso, como
          colaborador, você pode contar com uma série de benefícios projetados
          para tornar seu sonho acadêmico em realidade. O nosso compromisso é
          com o seu sucesso acadêmico, e nossa equipe está dedicada a
          acompanhá-lo(a) em toda a sua jornada. Oferecemos treinamento,
          orientações e estamos prontos para esclarecer todas as suas dúvidas,
          garantindo que você tenha todo o suporte necessário para alcançar seus
          objetivos acadêmicos.{" "}
        </p>
        <h2>Para cursos de Graduação:</h2>
        <img src="/img/desconto-g.png" alt="desconto graduação" />
        <div className={styles.columAport}>
          <div>
            <h2>Para cursos de Pós-Graduação e cursos técnicos:</h2>
            <img src="/img/desconto-p.png" alt="desconto pós" />
          </div>
          <div>
            <h2>Os benefícios ainda não acabaram! Ainda têm mais:</h2>
            <img src="/img/desconto-cl.png" alt="Desconto cursos" />
          </div>
        </div>
        <p>
          Não precisa se preocupar com os horários! A secretaria fica disponível
          para atendimento de segunda a sexta feira, das 8h às 22h e aos sábados
          das 8h às 17h.{" "}
        </p>
      </div>
    </section>
  );
};
