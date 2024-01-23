import "./index-style.scss";

const Index = () => {
  return (
    <div>
      <section className="section-g">
        <div className="intro-G">
          <img src="/img/anhanguera-stick.svg" alt="logo stick" />
          <h1>
            Não perca tempo e inicie seus estudos na anhanguera agora mesmo!
          </h1>
        </div>
        <p className="texto-g">
          Invista no seu futuro profissional com o Grupo Anhanguera SP.
          Oferecemos uma ampla variedade de cursos de graduação, incluindo
          opções online, semipresenciais e presenciais. Nossa oferta abrange uma
          gama diversificada de áreas, como saúde, direito, educação,
          engenharia, tecnologia e muito mais. Além disso, nos dedicamos a
          proporcionar um ambiente de aprendizado de alta qualidade, com
          professores experientes e recursos de apoio para ajudá-lo(a) a
          alcançar o sucesso acadêmico e profissional. Oferecemos cursos
          tecnólogos, bacharelados e licenciaturas para atender às suas
          necessidades e aspirações acadêmicas. Venha construir o seu caminho
          para o sucesso conosco.
        </p>
        <div className="intro-G">
          <img src="/img/chapeu-stick.svg" alt="logo stick" />
          <h1>Confira alguns dos nossos cursos de graduação em alta!</h1>
        </div>
      </section>

      <article className="cursos-alta-g">
        <div className="carousel2">
          <div className="carousel-inner2">
            <a
              href="#formulario"
              className="carousel-slide2"
              style={{ display: "none" }}
            >
              <img src="/img/BANNER LP ADM.png" alt="ADM" />
            </a>
            <a
              href="#formulario"
              className="carousel-slide2"
              style={{ display: "none" }}
            >
              <img src="/img/BANNER LP ENFERMAGEM.png" alt="ENFERMAGEM" />
            </a>
            <a
              href="#formulario"
              className="carousel-slide2"
              style={{ display: "none" }}
            >
              <img src="/img/BANNER LP ENGENHARIAS.png" alt="ENGENHARIAS" />
            </a>
            <a
              href="#formulario"
              className="carousel-slide2"
              style={{ display: "none" }}
            >
              <img src="/img/BANNER LP MARKETING.png" alt="MARKETING" />
            </a>
            <a
              href="#formulario"
              className="carousel-slide2"
              style={{ display: "none" }}
            >
              <img src="/img/BANNER LP PEDAGOGIA.png" alt="PEDAGOGIA" />
            </a>
          </div>
          <button id="prevButton2" className="carousel-button2">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button id="nextButton2" className="carousel-button2">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <p className="condicoes">*consulte condições</p>
      </article>

      <section className="section-g">
        <div className="intro-G">
          <img src="/img/raio-stick.svg" alt="raio stick" />
          <h1>
            Ainda está em dúvida? aqui vão algumas informações sobre nossos
            cursos
          </h1>
        </div>
        <img className="tabela-d-g" src="/img/tabela-g.png" alt="Tabela" />
        <img
          className="tabela-m-g"
          src="/img/tabela-g-mobile.png"
          alt="Tabela"
        />
      </section>
    </div>
  );
};

export default Index;
