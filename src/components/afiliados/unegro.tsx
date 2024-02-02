import { handlePhone } from "../../../public/TS/script";
import "./unegro.css";
import "../../../public/css/style.css";
import { useState } from "react";
import axios from "axios";

export const UnegroAfiliados = () => {
  const [u, setU] = useState("");
  const [CEP, setCEP] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [comercial, setComercial] = useState("");
  const [residencial, setResidencial] = useState("");
  const [celular, setCelular] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [sexo, setSexo] = useState("");
  const [emailAfiliado, setEmailAfiliado] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [ufm, setUfm] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [ocupacao, setOcupacao] = useState("");
  const [movimento, setMovimento] = useState("");
  const [uf, setUf] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  const date = new Date();

  const formatedDate = `${date.getUTCDate().toString().padStart(2, "0")}/${(
    date.getUTCMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;

  const body = {
    CEP,
    NomeAfiliado: u,
    endereco,
    numero,
    complemento,
    bairro,
    cidade,
    uf,
    residencial,
    comercial,
    celular,
    nascimento,
    rg,
    cpf,
    sexo,
    emailafiliado: emailAfiliado,
    municipio,
    ufm,
    escolaridade,
    ocupacao,
    movimento,
    valor: NaN,
    data: formatedDate,
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post("https://api.sheetmonkey.io/form/uyvgqX1ZoBoyAcF56h2ygN", body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3300);
  };

  console.log(body);

  return (
    <>
      <header className="header-bg-unegro">
        <div className="header-unegro container-unegro">
          <a href="">
            <img
              src="/img/logo_UNEGRO.svg"
              width="200"
              height="127"
              alt="UNEGRO"
            />
          </a>

          <nav arial-label="primaria">
            <ul className="header-menu-unegro">
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#propositos">Propósitos</a>
              </li>
              <li>
                <a href="#afiliados">Afiliados</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <article className="introducao-bg-unegro">
        <div className="introducao-unegro container-unegro">
          <div className="introducao-conteudo-unegro">
            <h1 className="titulo1-unegro">
              União de negros e negras pela igualdade
              <span className="span-unegro">.</span>
            </h1>
            <p className="p-unegro">
              A nossa missão é combater o racismo e todas formas de opressão.
              Rebele-se contra o racismo e junte-se a nós!
            </p>
            <a className="botao-unegro" href="#afiliados">
              Torne-se afiliado
            </a>
          </div>
          <picture>
            <source
              media="(max-width: 800px)"
              srcSet="/img/bicicletas/nimbus.jpg"
            />
            <img
              src="/img/img_unegro1.png"
              width="688"
              height="744"
              alt="Bicicleta elétrica preta."
            />
          </picture>
        </div>
      </article>

      <article className="sobre-lista" id="sobre">
        <h2
          className="container-unegro titulo2-unegro"
          style={{ marginLeft: "69px" }}
        >
          Sobre<span className="span-unegro">.</span>
        </h2>
        <p className="p2-unegro">
          Foi na Salvador de 1988, dentro da Biblioteca Pública dos Barris, que
          surgiu a União de Negras e Negros pela Igualdade (Unegro). Faziam
          apenas três anos que o Brasil havia saído da repressão e autoritarismo
          da Ditadura Militar (1964-1985) e o fervor por liberdade e democracia
          tomavam conta das ruas. Diante desse cenário de entusiasmo
          revolucionário, a entidade, criada por negras e negros marxistas,
          tornou as ruas como o seu principal campo de atuação, realizando ações
          contra o extermínio da população negra e na luta antirracista, de
          gênero e classNamee.
        </p>
        <div className="historia">
          <div>
            <h2 className="container-unegro titulo2-unegro">
              História<span className="span-unegro">.</span>
            </h2>
            <p className="p2-unegro">
              A Unegro foi fundada em 14 de julho de 1988, na cidade de
              Salvador, na Bahia, em reunião que aconteceu no interior da
              Biblioteca Pública do Estado, no bairro de Barris, num rompimento
              da noção de que o racismo era um fenômeno isolado de separação
              entre brancos e negros na sociedade brasileira. Trinta e três anos
              depois, a entidade ainda precisa lutar por problemas que já
              poderiam ter sido superados se as raízes do racismo não fossem tão
              profundas no país. A UNEGRO está organizada em 25 estados da
              Federação mais o Distrito Federal, entre os quais (AC, AL, AM, AP,
              BA, CE, DF ES, GO, MA, MG, MS, MT, PA, PE, PR, RJ, RN, RO, RR, RS,
              SC SE, SP, TO).
            </p>
          </div>
          <div className="presidente">
            <img
              src="/img/unegro_coordenador.png"
              alt="Julião Vieira"
              width="291"
              height="279"
            />
            <h4>Julião Vieira</h4>
            <h2 style={{ marginLeft: "0", fontSize: "22px" }}>
              Coordenador Nacional da Unegro
            </h2>
            <div className="lista-coluna">
              <ul>
                <li>Administrador de empresas</li>
                <li>Assessor Parlamentar</li>
                <li>Executiva Nacional da UBES</li>
                <li>Secretário Estadual de Combate ao Racismo do PCdoB</li>
                <li>Comissão Política do PCdoB de São Paulo</li>
                <li>
                  Comissão Organizadora da Conferência Nacional de Política de
                  Igualdade Racial
                </li>
                <li>Integrante orgânico da Escola de Samba Vai Vai</li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      <article id="propositos" className="proposito-bg">
        <div className="proposito container">
          <div className="proposito-conteudo">
            <h2>
              Propósitos<span className="span-unegro">.</span>
            </h2>
            <div className="proposito-vantagens">
              <div>
                <img
                  src="/img/missao_unegro.svg"
                  width="24"
                  height="24"
                  alt=""
                />
                <h6
                  style={{ fontSize: "40px", fontWeight: "600", margin: "0" }}
                >
                  Missão
                </h6>
                <ul>
                  <li>
                    Empenhar-se na prevenção e desenvolvimento da cultura negra;
                  </li>
                  <li>
                    Defender o livre direito de escolha da orientação sexual dos
                    homens e mulheres negras;
                  </li>
                  <li>Defender os direitos culturais da população negra;</li>
                  <li>
                    Externar solidariedade e apoio à luta dos povos africanos e
                    povos oprimidos de todo o mundo;
                  </li>
                  <li>
                    Defender de uma sociedade justa, fraterna, sem exploração de
                    classe, de raça ou baseada na exploração entre os sexos.{" "}
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/img/visao_unegro.svg"
                  width="24"
                  height="24"
                  alt=""
                />
                <h6
                  style={{ fontSize: "40px", fontWeight: "600", margin: "0" }}
                >
                  Visão
                </h6>
                <ul>
                  <li>
                    lutar pelo exercício da cidadania em todos os setores da
                    vida social do País
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/img/valores_unegro.svg"
                  width="24"
                  height="24"
                  alt=""
                />
                <h6
                  style={{ fontSize: "40px", fontWeight: "600", margin: "0" }}
                >
                  Valores
                </h6>
                <ul>
                  <li>
                    Lutar contra o racismo em todas as suas formas de expressão;
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="proposito-imagem">
            <img src="/img/img_unegro3.png" alt="" />
          </div>
        </div>
      </article>

      <main
        id="afiliados"
        style={{
          //border: "2px solid red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="titulo-bg">
          <div className="titulo container">
            <h1 className="titulo-cadastro" style={{ marginLeft: "0" }}>
              Cadastro de Afiliados<span className="span-unegro">.</span>
            </h1>
          </div>
        </div>
        <div className="contato container" style={{ width: "100%" }}>
          <section className="contato-dados" aria-label="Endereço">
            <h2>
              Ficha de filiação: União de negras e negros pela igualdade -
              UNEGRO
            </h2>
            <h3 style={{ color: "#ffffff" }}>Contribuição Anual de R$ 50,00</h3>
            <h3 style={{ color: "#ffffff" }}>
              Santander Ag - 4338 CC13.001204-5
            </h3>
            <h3 style={{ color: "#ffffff" }}>PIX - CNPJ 36.242.2390001-15</h3>{" "}
            <img
              src="/img/qrcode.jpg"
              width="100px"
              height="100px"
              alt="00020126580014br.gov.bcb.pix013611f7bf11-0351-428f-a7af-e05b02e5c023520400005303986540550.005802BR5915UNEGRO BARUERI6008BRASILIA62070503***6304FD48"
            />{" "}
            <img src="/img/logo_UNEGRO.svg" alt="" />
            <div className="contato-redes">
              <a
                target="_blank"
                href="https://www.facebook.com/UNEGRONACIONAL/"
              >
                <img src="/img/fb_unegro.svg" alt="Facebook" />
              </a>
              <a target="_blank" href="https://www.instagram.com/unegrobrasil/">
                <img src="/img/insta_unegro.svg" alt="Instagram" />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCBRvO5sZKZUffpq-PllJyZg"
              >
                <img src="/img/yt_unegro.svg" alt="Youtube" />
              </a>
            </div>
          </section>

          <section className="contato-formulario" aria-label="formulario">
            <form
              className="form"
              action="afiliados"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="col-2 nao-visivel">
                <label htmlFor="data">Data de Inscrição</label>
                <input type="text" id="data" name="data" readOnly />
              </div>

              <div>
                <label htmlFor="NomeAfiliado">Nome Completo</label>
                <input
                  type="text"
                  id="NomeAfiliado"
                  name="NomeAfiliado"
                  placeholder="Seu nome"
                  required
                  onChange={(e: any) => setU(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="CEP">CEP</label>
                <input
                  type="text"
                  id="CEP"
                  name="CEP"
                  placeholder="CEP"
                  required
                  onChange={(e: any) => setCEP(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="endereco">Endereço Residêncial</label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  placeholder="Seu Endereço"
                  required
                  onChange={(e: any) => setEndereco(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="numero">Número</label>
                <input
                  type="text"
                  id="numero"
                  name="numero"
                  placeholder="N°"
                  required
                  onChange={(e: any) => setNumero(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="complemento">Complemento</label>
                <input
                  type="text"
                  id="complemento"
                  name="complemento"
                  placeholder="Apto/Casa"
                  required
                  onChange={(e: any) => setComplemento(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="bairro">Bairro</label>
                <input
                  type="text"
                  id="bairro"
                  name="bairro"
                  placeholder="Seu Bairro"
                  required
                  onChange={(e: any) => setBairro(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="cidade">Cidade</label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  placeholder="Cidade"
                  required
                  onChange={(e: any) => setCidade(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="uf">UF</label>
                <input
                  type="text"
                  id="uf"
                  name="uf"
                  placeholder="UF"
                  required
                  onChange={(e: any) => setUf(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="residencial">
                  Telefone Residêncial(com DDD)
                </label>
                <input
                  type="tel"
                  id="residencial"
                  name="residencial"
                  placeholder="(DDD)0000-0000"
                  onKeyUp={(e) => handlePhone(e)}
                  maxLength={15}
                  onChange={(e: any) => setResidencial(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="comercial">Telefone Comercial(com DDD)</label>
                <input
                  type="tel"
                  id="comercial"
                  name="comercial"
                  placeholder="(DDD)0000-0000"
                  onKeyUp={(e) => handlePhone(e)}
                  maxLength={15}
                  onChange={(e: any) => setComercial(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="celular">Celular(com DDD)</label>
                <input
                  type="tel"
                  id="celular"
                  name="celular"
                  placeholder="(DDD)99999-9999"
                  onKeyUp={(e) => handlePhone(e)}
                  maxLength={15}
                  onChange={(e: any) => setCelular(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="nascimento">Data de Nascimento</label>
                <input
                  type="text"
                  id="nascimento"
                  name="nascimento"
                  placeholder="xx/xx/xxxx"
                  required
                  onChange={(e: any) => setNascimento(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="rg">RG</label>
                <input
                  type="text"
                  id="rg"
                  name="rg"
                  placeholder="xx.xxx.xxx-x"
                  required
                  onChange={(e: any) => setRg(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  placeholder="xxx.xxx.xxx-xx"
                  required
                  onChange={(e: any) => setCpf(e.target.value)}
                />
              </div>

              <div className="col-2">
                <label htmlFor="sexo">Sexo</label>
                <select
                  className="form-select"
                  name="sexo"
                  id="sexo"
                  required
                  onChange={(e: any) => setSexo(e.target.value)}
                >
                  <option value="" disabled selected>
                    Escolha o seu sexo
                  </option>
                  <option value="feminino">Feminino</option>
                  <option value="masculino">Masculino</option>
                  <option value="prefiro nao inhtmlFormar">
                    Prefiro não InhtmlFormar
                  </option>
                </select>
              </div>

              <div className="col-2">
                <label htmlFor="emailafiliado">Email</label>
                <input
                  type="text"
                  id="emailafiliado"
                  name="emailafiliado"
                  placeholder="contato@email.com.br"
                  autoComplete="on"
                  required
                  onChange={(e: any) => setEmailAfiliado(e.target.value)}
                />
              </div>

              <div className="col-2">
                <label htmlFor="municipio">Município que milita</label>
                <input
                  type="text"
                  id="municipio"
                  name="municipio"
                  placeholder="Município"
                  autoComplete="on"
                  onChange={(e: any) => setMunicipio(e.target.value)}
                />
              </div>

              <div className="col-2">
                <label htmlFor="ufm">UF que milita</label>
                <input
                  type="text"
                  id="ufm"
                  name="ufm"
                  placeholder="UF"
                  autoComplete="on"
                  onChange={(e: any) => setUfm(e.target.value)}
                />
              </div>

              <div className="col-2">
                <label htmlFor="escolaridade">Grau de Escolaridade</label>
                <select
                  className="htmlForm-select"
                  name="escolaridade"
                  id="escolaridade"
                  required
                  onChange={(e: any) => setEscolaridade(e.target.value)}
                >
                  <option value="" disabled selected>
                    Gradu de Escolaridade
                  </option>
                  <option value="Sem Instrução">Sem Instrução</option>
                  <option value="Ensino Fundamental Completo (antigo 1º grau)">
                    Ensino Fundamental Completo (antigo 1º grau)
                  </option>
                  <option value="Ensino Fundamental Incompleto">
                    Ensino Fundamental Incompleto
                  </option>
                  <option value="Ensino Médio Completo (antigo 2º grau) ">
                    Ensino Médio Completo (antigo 2º grau){" "}
                  </option>
                  <option value="Ensino Médio Incompleto">
                    Ensino Médio Incompleto
                  </option>
                  <option value="Superior Completo">Superior Completo</option>
                  <option value="Superior Incompleto">
                    Superior Incompleto
                  </option>
                  <option value="Especialização, Pós-Graduação/Lato Sensu">
                    Especialização, Pós-Graduação/Lato Sensu
                  </option>
                  <option value="Mestrado, Pós-Graduação/Stricto Sensu">
                    Mestrado, Pós-Graduação/Stricto Sensu
                  </option>
                  <option value="Doutorado">Doutorado</option>
                  <option value="Pós-doutorado">Pós-doutorado</option>
                </select>
              </div>

              <div className="col-2">
                <label htmlFor="ocupacao">Qual a sua ocupação/profissão?</label>
                <input
                  type="text"
                  id="ocupacao"
                  name="ocupacao"
                  placeholder="Ocupação/Profissão"
                  required
                  onChange={(e) => setOcupacao(e.target.value)}
                />
              </div>

              <div className="col-2">
                <label htmlFor="movimento">
                  Você participa de algum dos Movimentos Sociais e Populares
                  (selecione o principal)
                </label>
                <select
                  className="form-select"
                  name="movimento"
                  id="movimento"
                  required
                  onChange={(e: any) => setMovimento(e.target.value)}
                >
                  <option value="" disabled selected>
                    Selecione o Movimento Social
                  </option>
                  <option value="Ambientalista">Ambientalista</option>
                  <option value="Ciências e Tecnologia">
                    Ciências e Tecnologia
                  </option>
                  <option value="Comunicação">Comunicação</option>
                  <option value=" Comunitário/Bairros">
                    {" "}
                    Comunitário/Bairros
                  </option>
                  <option value="Conselhos Profissionais">
                    Conselhos Profissionais
                  </option>
                  <option value="Cultural e Artísticos">
                    {" "}
                    Cultural e Artísticos
                  </option>
                  <option value=" Direitos Humanos"> Direitos Humanos</option>
                  <option value=" Esporte e Lazer"> Esporte e Lazer</option>
                  <option value=" Estudantil (Secundarista, universitário ou pós-graduação)">
                    {" "}
                    Estudantil (Secundarista, universitário ou pós-graduação)
                  </option>
                  <option value=" Movimentos pela RehtmlForma Agrária">
                    {" "}
                    Movimentos pela RehtmlForma Agrária
                  </option>
                  <option value="Mulheres">Mulheres</option>
                  <option value="Religioso">Religioso</option>
                  <option value="Saúde">Saúde</option>
                  <option value="Sindical">Sindical</option>
                  <option value="Religião Matriz Africana">
                    Religião Matriz Africana
                  </option>
                  <option value="LGBTQIAPN+">LGBTQIAPN+</option>
                  <option value="Outros">Outros</option>
                  <option value="Não participa de nenhum desses movimentos">
                    Não participa de nenhum desses movimentos
                  </option>
                </select>
              </div>

              <input
                className="botao-form hover:bg-gray-500"
                type="submit"
                style={{ backgroundColor: "#325e75" }}
                value={"Afilie-se"}
              />
            </form>
            <div
              className={`bg-green-100 rounded-md p-3 flex mt-5 ${
                showSuccess ? "" : "hidden"
              }`}
            >
              <svg
                className="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2 4-4" />
              </svg>

              <div className="text-green-700">
                <div className="font-bold text-xl">
                  Seu formulário foi enviado!
                </div>

                <div>
                  Seu formulário foi enviado com sucesso! Muito obrigado.
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer-unegro">
        <img src="/img/logo_UNEGRO.svg" alt="" />
        <div className="footer-redes">
          <a target="_blank" href="https://www.facebook.com/UNEGRONACIONAL/">
            <img src="/img/fb_unegro.svg" alt="Facebook" />
          </a>
          <a target="_blank" href="https://www.instagram.com/unegrobrasil/">
            <img src="/img/insta_unegro.svg" alt="Instagram" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCBRvO5sZKZUffpq-PllJyZg"
          >
            <img src="/img/yt_unegro.svg" alt="Youtube" />
          </a>
        </div>
        <p>unegro © todos os direitos reservados.</p>
      </footer>
    </>
  );
};
