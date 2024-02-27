import "./unegro-style.scss";

export const UnegroSection = () => {
  return (
    <section className="section-unegro">
      <div className="intro-unegro">
        <img src="/img/icone info.svg" alt="info stick" />
        <h1 className="titulo-unegro mt-2 text-4xl md:text-5xl lg: text-5xl font-semibold">
          Você conhece a unegro?
        </h1>
      </div>
      <div className="unegro">
        <p className="texto-unegro column1">
          A Unegro foi fundada em 14 de julho de 1988, na cidade de Salvador, na
          Bahia, em reunião que aconteceu no interior da Biblioteca Pública do
          Estado, no bairro de Barris, num rompimento da noção de que o racismo
          era um fenômeno isolado de separação entre brancos e negros na
          sociedade brasileira. Trinta e três anos depois, a entidade ainda
          precisa lutar por problemas que já poderiam ter sido superados se as
          raízes do racismo não fossem tão profundas no país. A UNEGRO está
          organizada em 25 estados da Federação mais o Distrito Federal.
        </p>
        <img
          className="column2"
          src="/img/img-unegro.png"
          alt="uniao de negros e negras pela igualdade"
        />
      </div>
      <p className="texto-unegro">Dentre os propósitos da UNEGRO estão: </p>
      <ul className="texto-unegro lista-unegro">
        <li>Empenhar-se na preservação e desenvolvimento da cultura negra;</li>
        <li>
          Defender o livre direito de escolha da orientação sexual dos homens e
          mulheres negras;
        </li>
        <li>Defender os direitos culturais da população negra;</li>
        <li>
          Externar solidariedade e apoio à luta dos povos africanos e povos
          oprimidos de todo o mundo;
        </li>
        <li>
          Defender de uma sociedade justa, fraterna, sem exploração de
          classNamee, de raça ou baseada na exploração entre os sexos. Esses
          objetivos foram aprovados numa época de grandes agitações políticas e
          ideológicas no Brasil, pois o País acabara de sair de quase 25 anos de
          ditadura militar;
        </li>
      </ul>

      <div className="intro-unegro">
        <img src="/img/icone duvida.svg" alt="duvida stick" />
        <h1 className="titulo-unegro">Parceria com a anhanguera SP </h1>
      </div>
      <p className="texto-unegro">
        A colaboração entre a UNEGRO e o Grupo Anhanguera SP foi estabelecida
        com a finalidade de promover um aumento significativo no acesso à
        educação superior para pessoas negras. Essa parceria busca eliminar as
        barreiras que historicamente têm limitado as oportunidades educacionais
        para a comunidade negra, visando criar um ambiente mais inclusivo e
        igualitário dentro do ensino superior. Dessa forma, espera-se que mais
        indivíduos fidelizados da unegro tenham a chance de buscar uma educação
        de qualidade e alcançar seus objetivos acadêmicos e profissionais.
      </p>
    </section>
  );
};
