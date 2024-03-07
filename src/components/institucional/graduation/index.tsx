import { minicarouselhomelist } from "../../../utils/listas/mini-carousel";
import { MiniCarouselList } from "../../layout/miniCarousel/MiniCarousel.module";
import "./index-style.scss";

const Index = () => {
  return (
    <div>
      <section className="section-g">
        <div className="intro-G">
          <img
            src="/img/anhanguera-stick.svg"
            alt="logo stick"
            className="mt-16"
          />
          <h1 className="mt-12 text-4xl">
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
          <h1 className="text-4xl">
            Confira alguns dos nossos cursos de graduação em alta!
          </h1>
        </div>
      </section>

      <div className="" style={{ backgroundColor: "#fdb913" }}>
        <MiniCarouselList imageList={minicarouselhomelist} />
        <p className={"condicoes"}>*consulte condições</p>
      </div>

      <section className="section-g">
        <div className="intro-G">
          <img src="/img/raio-stick.svg" alt="raio stick" />
          <h1 className="text-4xl">
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
