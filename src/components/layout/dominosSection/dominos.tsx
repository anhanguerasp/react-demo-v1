import "./dom.scss";

export const DominoSection = () => {
  return (
    <section className="dominos">
      <div className="estudante-container mt-50">
        <h2>Conheça os benefícios para estudante e colaborador anhanguera</h2>
        <p>
          Você estudante ou colaborador agora tem direito ao beneficio de{" "}
          <strong>40 %</strong> de desconto em Pizzas médias ou grandes, massa
          fina ou tradicional, todos os sabores.{" "}
        </p>
        <p>
          Para utilizar é bem simples. Basta utilizar o cupom{" "}
          <strong>ANHANSP40</strong> no site ou direto nos balcões de qualquer
          loja informando fazer o pedido através da parceria Domino's e
          Anhanguera.{" "}
        </p>
        <p>
          Para utilizar o cupom online acesse{" "}
          <a href="https://www.dominos.com.br/" target="_blank">
            www.dominos.com.br
          </a>{" "}
          ou aplicativo e insira o cupom na aba de promoções.{" "}
        </p>
        <a href="https://www.dominos.com.br/" target="_blank">
          <img src="/img/promocao_dominos.png" alt="Como inserir o cupom" />
        </a>
      </div>
    </section>
  );
};

{
  /*<section className={styles.dominosSection}>
      <div className={styles.studentContainer}>
        <div className={styles.content}>
          <BasicTitle content="CONHEÇA OS BENEFÍCIOS PARA ESTUDANTE E COLABORADOR ANHANGUERA" />
          <p>
            Você estudante ou colaborador agora tem direito ao beneficio de{" "}
            <strong>40 %</strong> de desconto em Pizzas médias ou grandes, massa
            fina ou tradicional, todos os sabores.{" "}
          </p>
          <p>
            Para utilizar é bem simples. Basta utilizar o cupom{" "}
            <strong>ANHANSP40</strong> no site ou direto nos balcões de qualquer
            loja informando fazer o pedido através da parceria Domino's e
            Anhanguera.{" "}
          </p>
          <p>
            Para utilizar o cupom online acesse{" "}
            <a href="https://www.dominos.com.br/" target="_blank">
              www.dominos.com.br
            </a>{" "}
            ou aplicativo e insira o cupom na aba de promoções.{" "}
          </p>
          <a href="https://www.dominos.com.br/" target="_blank">
            <img src="/img/promocao_dominos.png" alt="Como inserir o cupom" />
          </a>
        </div>
      </div>
  </section>*/
}
