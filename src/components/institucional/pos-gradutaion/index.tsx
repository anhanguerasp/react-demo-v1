import { posminilist } from "../../../utils/listas/mini-carousel";
import { MiniCarouselList } from "../../layout/miniCarousel/MiniCarousel.module";
import "./index-style.scss";

const Index = () => {
  return (
    <div>
      <section className="section-g">
        <div className="intro-G">
          <img
            src="/img/anhanguera-stick-pos2.svg"
            alt="logo stick"
            className="mt-14"
          />
          <h1 className="text-4xl mt-16">
            venha fazer pós-graduação e MBA na Anhanguera!
          </h1>
        </div>
        <p className="texto-g">
          Oferecemos uma ampla variedade de Cursos de Pós-graduação e MBAs,
          todos certificados pelo Ministério da Educação (MEC). Com um catálogo
          abrangente, contamos com mais de 500 cursos distintos, que abrangem
          tanto programas de Pós-Graduação quanto MBAs, oferecendo flexibilidade
          nas durações dos estudos, com opções de formação entre 4, 6 e 10
          meses. Nossa diversidade de cursos assegura que você possa escolher
          aqueles que melhor atendam aos seus objetivos educacionais e
          profissionais.
        </p>
        <div className="intro-G">
          <img src="/img/mouse-stick-pos.svg" alt="logo stick" />
          <h1 className="titulo-pos text-4xl">
            Confira alguns dos nossos cursos de graduação em alta!
          </h1>
        </div>
      </section>

      <article className="bg">
        <MiniCarouselList imageList={posminilist} />
        <p className="condicoes">*consulte condições</p>
      </article>

      <section className="section-g">
        <div className="intro-G">
          <img src="/img/raio-stick.svg" alt="raio stick" />
          <h1 className="titulo-pos text-4xl">
            Diferenciais de se cursar uma pós ou MBA
          </h1>
        </div>
        <img className="tabela-d-g" src="/img/tabela-p.png" alt="Tabela" />
        <img
          className="tabela-m-g"
          src="/img/tabela-p-mobile.png"
          alt="Tabela"
        />
      </section>
    </div>
  );
};

export default Index;
