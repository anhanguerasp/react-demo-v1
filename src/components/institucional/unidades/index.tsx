import "./index-style.scss";
import { scrollDown } from "../../../../public/TS/script";

export const Index = () => {
  return (
    <main>
      <div className="titulo-unidades">
        <div className="titulo-unidades container-unidades">
          <p>São 16 unidades dentro do grupo anhanguera Sp! </p>
          <h1>Conheça nossas unidades!</h1>
        </div>
      </div>
      <div className="container-opcoes">
        <ul className="tabs">
          <li>
            <a onClick={() => scrollDown()} id="botao1" className="inactive">
              Araraquara
            </a>
          </li>
          <li>
            <a onClick={() => scrollDown()} id="botao2" className="inactive">
              Barueri
            </a>
          </li>
          <li>
            <a onClick={() => scrollDown()} id="botao3" className="inactive">
              Bauru
            </a>
          </li>
          <li>
            <a onClick={() => scrollDown()} id="botao4" className="inactive">
              Carapicuíba
            </a>
          </li>
          <li>
            <a onClick={() => scrollDown()} id="botao5" className="inactive">
              Cidade de Tiradentes
            </a>
          </li>
          <li>
            <a onClick={() => scrollDown()} id="botao6" className="inactive">
              Jabaquara
            </a>
          </li>
          <li>
            <a onClick={() => scrollDown()} id="botao7" className="inactive">
              Limeira
            </a>
          </li>
          <li>
            <a onClick={() => scrollDown()} id="botao8" className="">
              Paulista
            </a>
          </li>
          <li>
            <a onClick={() => scrollDown()} id="botao9" className="inactive">
              Pirapora do Bom Jesus
            </a>
          </li>
          <li>
            <a onClick={() => scrollDown()} id="botao10" className="inactive">
              República
            </a>
          </li>
          <li>
            <a onClick={() => scrollDown()} id="botao11" className="inactive">
              Rio Claro
            </a>
          </li>
          <li>
            <a onClick={() => scrollDown()} id="botao12" className="inactive">
              Santa Gertrudes
            </a>
          </li>
          <li>
            <a onClick={() => scrollDown()} id="botao13" className="inactive">
              Santana de Parnaíba
            </a>
          </li>
          <li>
            <a onClick={() => scrollDown()} id="botao14" className="inactive">
              São Miguel
            </a>
          </li>
          <li>
            <a onClick={() => scrollDown()} id="botao15" className="inactive">
              Tatuapé
            </a>
          </li>
          <li>
            <a onClick={() => scrollDown()} id="botao16" className="inactive">
              Vila Matilde
            </a>
          </li>
        </ul>

        <div id="descricao-unidade" className="unidades-descricao-container">
          <ul>
            <li style={{ display: "none" }} id="text1">
              <div>
                <h2>Unidade</h2>
                <h3>Araraquara</h3>
                <ul>
                  <li>
                    <h4>Núcleo Conecta</h4>
                    <p>Avenida Espanha, N°495</p>
                    <p>
                      <a href="tel:+551633976493">Tel: (16)3397-6493</a>
                    </p>
                  </li>
                  <li>
                    <h4>Núcleo de Práticas Acadêmicas</h4>
                    <p>Avenida Portugal, N°433</p>
                    <p>
                      <a href="tel:+551633977087">Tel: (16)3397-7087</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li style={{ display: "none" }} id="text2">
              <div>
                <h2>Unidade</h2>
                <h3>Barueri</h3>
                <ul>
                  <li>
                    <p>R. Prof. João da Mata e Luz, N° 23 - Centro</p>
                    <p>
                      <a href="tel:+551141984164">Tel: (11)4198-4164</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li style={{ display: "none" }} id="text3">
              <div>
                <h2>Unidade</h2>
                <h3>Bauru</h3>
                <ul>
                  <li>
                    <h4>Unidade de Direito</h4>
                    <p>Av. Duque de Caxias, N°43 </p>
                    <p>
                      <a href="tel:+551438791496">Tel: (14)3879-1496</a>
                    </p>
                  </li>
                  <li>
                    <h4>Unidade de Psicologia</h4>
                    <p>Av. Araújo Leite, N°25-73</p>
                    <p>
                      <a href="tel:+551438791433">Tel: (14)3879-1433</a>
                    </p>
                  </li>
                  <li>
                    <h4>Núcleo de Práticas Acadêmicas</h4>
                    <p>Av. Duque de Caxias, N°11-80</p>
                    <p>
                      <a href="tel:+551438792352">Tel: (14)3879-2352</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li style={{ display: "none" }} id="text4">
              <div>
                <h2>Unidade</h2>
                <h3>Carapicuíba</h3>
                <ul>
                  <li>
                    <h4>Polo I</h4>
                    <p>Avenida Tâmara, 70, 72 - Centro</p>
                    <p>
                      <a href="tel:+551141831819">Tel: (11)4183-1819</a>
                    </p>
                  </li>
                  <li>
                    <h4>Polo II</h4>
                    <p>Av. Inocêncio Seráfico, 2109 - Vila Silva Ribeiro</p>
                    <p>
                      <a href="tel:+551124244405">Tel: (11)2424-4405</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li style={{ display: "none" }} id="text5">
              <div>
                <h2>Unidade</h2>
                <h3>Cidade Tiradentes</h3>
                <ul>
                  <li>
                    <p>
                      Rua Arnaldo Bonaventura 623 - Sala 3 - Cid. Tiradentes
                    </p>
                    <p>
                      <a href="tel:+551125590045">Tel: (11)2559-0045</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li style={{ display: "none" }} id="text6">
              <div>
                <h2>Unidade</h2>
                <h3>Jabaquara</h3>
                <ul>
                  <li>
                    <p>Rua Onze de Fevereiro, 161 Cidade Vargas </p>
                    <p>
                      <a href="tel:+551142834897">Tel: (11)4283-4897</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li style={{ display: "none" }} id="text7">
              <div>
                <h2>Unidade</h2>
                <h3>Limeira</h3>
                <ul>
                  <li>
                    <p>Rua Duque de Caxias, 453 - Vila Paraiso</p>
                    <p>
                      <a href="tel:+551937026256">Tel: (19)3702-6256</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li style={{ display: "none" }} id="text8">
              <div>
                <h2>Unidade</h2>
                <h3>Paulista</h3>
                <ul>
                  <li>
                    <p>Av. Paulista, 807 - Bela Vista</p>
                    <p>
                      <a href="tel:+551132535115">Tel: (11)3253-5115</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li style={{ display: "none" }} id="text9">
              <div>
                <h2>Unidade</h2>
                <h3>Pirapora do Bom Jesus</h3>
                <ul>
                  <li>
                    <p>R. Bom Jesus, 4 - Jardim Bom Jesus</p>
                    <p>
                      <a href="tel:+551194663-0386">Tel: (11)94663-0386</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li style={{ display: "none" }} id="text10">
              <div>
                <h2>Unidade</h2>
                <h3>República</h3>
                <ul>
                  <li>
                    <p>R. Barão de Itapetininga, 298 - República</p>
                    <p>
                      <a href="tel:+551132373138">Tel: (11)3237-3138</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li style={{ display: "none" }} id="text11">
              <div>
                <h2>Unidade</h2>
                <h3>Rio Claro</h3>
                <ul>
                  <li>
                    <h4>Núcleo de Saúde</h4>
                    <p>Rua 2A , 1195 - Jardim Primavera</p>
                    <p>
                      <a href="tel:+551935579964">Tel: (19)3557-9964</a>
                    </p>
                  </li>
                  <li>
                    <h4>Núcleo de Direito</h4>
                    <p>Rua 2, 3117 - Vila Operaria</p>
                    <p>
                      <a href="tel:+551935970304">Tel: (19)3597-0304</a>
                    </p>
                  </li>
                  <li>
                    <h4>Núcleo de Engenharia</h4>
                    <p>Rua 6, 2855 - Santana</p>
                    <p>
                      <a href="tel:+551935970305">Tel: (19)3597-0305</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li style={{ display: "none" }} id="text12">
              <div>
                <h2>Unidade</h2>
                <h3>Santa Gertrudes</h3>
                <ul>
                  <li>
                    <p>Avenida 3, 18 - Centro</p>
                    <p>
                      <a href="tel:+5519999637381">Tel: (19)99963-7381</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li style={{ display: "none" }} id="text13">
              <div>
                <h2>Unidade</h2>
                <h3>Santana de Parnaiba</h3>
                <ul>
                  <li>
                    <p>Rua Pedro Procópio, 52 - Centro</p>
                    <p>
                      <a href="tel:+5511946630386">Tel: (11)94663-0386</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li style={{ display: "none" }} id="text14">
              <div>
                <h2>Unidade</h2>
                <h3>São Miguel</h3>
                <ul>
                  <li>
                    <p>Avenida Nordestina, 1455 - Vila Americana</p>
                    <p>
                      <a href="tel:+551120311980">Tel: (11)2031-1980</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li style={{ display: "none" }} id="text15">
              <div>
                <h2>Unidade</h2>
                <h3>Tatuapé</h3>
                <ul>
                  <li>
                    <p>Rua Apucarana, 523 - Tatuapé</p>
                    <p>
                      <a href="tel:+551122271866">Tel: (11)2227-1866</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <li style={{ display: "none" }} id="text16">
              <div>
                <h2>Unidade</h2>
                <h3>Vila Matilde</h3>
                <ul>
                  <li>
                    <p>Rua Celina, 297 - Vila Esperança</p>
                    <p>
                      <a href="tel:+5511938027318">Tel: (11)93802-7318</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Index;
