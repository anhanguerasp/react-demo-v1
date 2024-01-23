import styles from "./acirc-style.module.scss";

export const AcircSection = () => {
  return (
    <section className={styles.acirc}>
      <div className={styles.acircContainer}>
        <h1 className={styles.tituloAcirc}>Potencialize seu negócio!</h1>
        <p>
          Agora, a Anhanguera Rio Claro estabeleceu uma parceria que traz
          consigo uma gama de benefícios excepcionais para os membros da
          Associação Comercial e Industrial de Rio Claro. Essa colaboração
          oferece uma oportunidade incrível para impulsionar o seu
          desenvolvimento profissional, expandir seus horizontes e fortalecer
          seus conhecimentos no mundo dos negócios. Cursos chaves para seu
          negócio:
        </p>
        <ul className={styles.acircIntro}>
          <li>Administração</li>
          <li>Gestão Financeira</li>
          <li>Gestão Comercial</li>
          <li>Gestão de RH</li>
          <li>Ciências Contábeis</li>
        </ul>
        <p>
          E muito mais! É a sua chance de mergulhar em um ambiente de
          aprendizado que não apenas educa, mas também conecta você com
          oportunidades de crescimento tangíveis. Não perca essa oportunidade!{" "}
        </p>
        <div className={styles.columAcirc}>
          <div className={styles.beneficiosAcirc}>
            <h1 className={styles.tituloAcirc}>Confira os benefícios</h1>
            <ul>
              <li>
                <img src="/img/icon-30.svg" alt="icone de 30%" />
                <p>
                  Desconto de 20% nos cursos <strong>de graduação</strong>
                  <span>
                    {" "}
                    (pagando até o 5° dia útil tenha mais 10% de desconto!!!)
                  </span>
                </p>
              </li>
              <li>
                <img src="/img/icon-10.svg" alt="icone de 10%" />
                <p>
                  Desconto de 10% nos cursos <strong>EAD</strong>{" "}
                </p>
              </li>
              <li>
                <img src="/img/icon-5.svg" alt="icone de 5%" />
                <p>
                  Desconto de 5% nos cursos de <strong>pós graduação</strong>{" "}
                </p>
              </li>
              <li>
                <img src="/img/icon-psico.svg" alt="icone psicologia" />
                <p>Atendimento na clinica de psicologia </p>
              </li>
              <li>
                <img src="/img/icon-palestra.svg" alt="icone de palestrante" />
                <p>Palestras em unidades e empresas</p>
              </li>
            </ul>
          </div>
          <div>
            <h1 className={styles.tituloAcirc}>Confira os cursos!</h1>
            <img
              className={styles.logoRc}
              src="/img/Anhanguera Rio Claro.svg"
              alt="logo anhanguera RC"
            />
            <div className={styles.imgCursosRc}>
              <img
                src="/img/CONFIRA NOSSOS CURSOS - DIREITO.png"
                alt="Comece Direito"
                width="364"
                height="364"
              />
              <img
                src="/img/CONFIRA NOSSOS CURSOS - ENFERMAGEM.png"
                alt="Comece Enfermagem"
                width="364"
                height="364"
              />
              <img
                src="/img/CONFIRA NOSSOS CURSOS - PSICOLOGIA.png"
                alt="Comece psicologia"
                width="364"
                height="364"
              />
              <img src="/img/ENNGENHARIAS 1.png" alt="Comece Engenharia" />
              <img src="/img/cursos-100-online.png" alt="Comece curso online" />
            </div>
          </div>
        </div>
        <p>
          Não perca essa incrível oportunidade de se juntar à Anhanguera Rio
          Claro e aproveitar todos esses benefícios excepcionais disponíveis por
          meio dessa colaboração estratégica. Sua jornada para um futuro
          empresarial mais promissor começa aqui. Matricule-se agora e esteja
          pronto para abraçar um mundo de possibilidades!{" "}
        </p>
      </div>

      <div className={styles.acircContainer}>
        <h1 className={styles.tituloAcirc}>Sobre a ACIRC</h1>
        <div className={styles.sobreAcirc}>
          <img src="/img/icon-acirc1.svg" alt="lampada" />
          <p>
            Fundada em 30 de julho de 1922, a Associação Comercial e Industrial
            de Rio Claro (ACIRC) tem um compromisso de longa data com seus
            associados, visando garantir seus direitos e proporcionar
            assistência de qualidade.
          </p>
          <img src="/img/icon-acirc2.svg" alt="mãos" />
          <p>
            A missão da ACIRC é fornecer soluções e serviços de excelência para
            promover o desenvolvimento, o crescimento e a estabilidade das
            empresas e futuros empresários de Rio Claro/SP e da Microrregião.
          </p>
          <img src="/img/icon-acirc3.png" alt="acordo" />
          <p>
            A ACIRC oferece uma gama de serviços que inclui apoio aos negócios,
            representação perante instituições públicas e privadas, e suporte
            essencial para o desenvolvimento empresarial da região.
          </p>
        </div>
      </div>
    </section>
  );
};
