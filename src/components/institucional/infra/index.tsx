import "./index-styles.scss";
const Index = () => {
  return (
    <>
      <section className="section-i">
        <div className="intro-i" style={{ marginTop: "49px" }}>
          <img src="/img/wifi-stick.svg" alt="wifi stick" />
          <h1>
            o grupo anhanguera Sp conta com 16 unidades com infraestruturas
            espetaculares para nossos alunos
          </h1>
        </div>
        <div className="predios">
          <img src="/img/predios.svg" alt="predios" width="243" height="243" />
          <p className="texto-i">
            A Faculdade Anhanguera oferece uma infraestrutura de última geração,
            proporcionando aos seus alunos acesso a tecnologias de ponta. Com
            laboratórios equipados e recursos atualizados, a instituição está
            comprometida em garantir que seus estudantes tenham todas as
            ferramentas necessárias para alcançar o sucesso acadêmico e se
            preparar para um futuro promissor. Na Anhanguera, a excelência na
            educação se reflete na qualidade de sua infraestrutura,
            proporcionando um ambiente propício ao aprendizado e à inovação.
          </p>
        </div>
      </section>
      <section>
        <div className="NPA">
          <img
            src="/img/nucleo de praticas academicas.png"
            alt="nucleo de praticas academicas"
          />
          <div className="texto-corpo">
            <h2>Núcleo de práticas acadêmicas</h2>
            <p>
              A infraestrutura das salas de aula na faculdade Anhanguera é de
              alta qualidade. Equipadas com tecnologia avançada, proporcionam um
              ambiente confortável para aprendizado. Os espaços colaborativos
              incentivam a interação entre os estudantes. A faculdade também
              valoriza a acessibilidade e oferece recursos digitais e
              bibliotecas bem equipadas para apoiar o aprendizado e a pesquisa
              dos alunos. A Anhanguera demonstra um compromisso claro com a
              excelência educacional por meio de suas instalações modernas.
            </p>
          </div>
        </div>

        <div className="NPA">
          <div className="texto-corpo-direita">
            <h2>Laboratórios</h2>
            <p>
              Na Universidade Anhanguera, os laboratórios desempenham um papel
              essencial no enriquecimento da experiência educacional. A
              instituição oferece uma ampla variedade de laboratórios,
              especialmente dedicados a áreas como enfermagem, fisioterapia e
              nutrição. Esses laboratórios estão equipados com uma extensa gama
              de materiais e recursos que permitem aos estudantes vivenciar a
              prática profissional de forma realista e eficaz. Além disso, a
              presença do laboratório de nutrição complementa ainda mais a
              qualidade da educação oferecida pela Anhanguera, fornecendo aos
              alunos oportunidades de aprendizado prático e experiência no campo
              da nutrição.
            </p>
          </div>
          <img src="/img/microscopio.png" alt="laboratorios" />
        </div>

        <div className="NPA">
          <img src="/img/nucleo de saude.png" alt="nucleo de saude" />
          <div className="texto-corpo">
            <h2>Núcleo de Saúde</h2>
            <p>
              A Anhanguera, oferta diversos cursos destinada às áreas de saúde,
              como Biomedicina, Ciências Biológicas, Educação Física,
              Enfermagem, Fisioterapia, Gestão Hospitalar e Nutrição. Com um
              hospital simulado, manequins avançados e enfermarias modernas, a
              instituição se destaca na preparação de seus alunos.
            </p>
            <p>
              Nossas instalações oferecem um ambiente onde os estudantes podem
              praticar e aprimorar suas habilidades clínicas de maneira
              realista. Seja qual for a área escolhida, a Anhanguera se dedica a
              capacitar seus alunos com habilidades técnicas sólidas, a
              capacidade de gerenciar crises e liderar equipes de trabalho com
              sucesso.{" "}
            </p>
          </div>
        </div>

        <div className="NPA">
          <div className="texto-corpo-direita">
            <h2>Núcleo de Engenharia</h2>
            <p>
              O Núcleo de Engenharia na Anhanguera é um centro de excelência que
              prepara engenheiros para o mercado com laboratórios modernos,
              salas de aula bem equipadas e um corpo docente experiente. Focamos
              na educação prática e na inovação, capacitando nossos alunos para
              enfrentar desafios do mundo real e contribuir positivamente para a
              sociedade.
            </p>
          </div>
          <img src="/img/nucleo de engenharia.png" alt="nucleo de engenharia" />
        </div>

        <div className="NPA">
          <img
            src="/img/clinica de psicologia.png"
            alt="clinica de psicologia"
          />
          <div className="texto-corpo">
            <h2>Clínica de Psicologia (Rio Claro)</h2>
            <p>
              A Clínica de Psicologia do grupo Anhanguera SP oferece consultas
              conduzidas por alunos formados em Psicologia. Os consultórios da
              clínica estão disponíveis tanto para os estudantes quanto para os
              moradores de Rio Claro. Isso proporciona aos futuros psicólogos a
              oportunidade de ganhar experiência prática enquanto oferecem
              serviços de qualidade à comunidade. A Anhanguera se orgulha de
              contribuir para o bem-estar da cidade por meio dessa abordagem de
              cuidado acessível e colaborativo.{" "}
            </p>
          </div>
        </div>

        <div className="NPA">
          <div className="texto-corpo-direita">
            <h2>Secretária</h2>
            <p>
              Nossos polos de ensino da Anhanguera estão aqui para tornar sua
              experiência acadêmica mais conveniente e acessível. Cada polo
              conta com uma secretária dedicada, pronta para atender às
              necessidades dos alunos. Seja para obter informações sobre cursos,
              suporte administrativo ou esclarecimento de dúvidas, nossa equipe
              de secretaria está à disposição para ajudar. Nosso objetivo é
              garantir que você tenha todo o apoio necessário para ter sucesso
              em sua jornada educacional.
            </p>
          </div>
          <img src="/img/secretaria.png" alt="secretaria" />
        </div>
      </section>
    </>
  );
};

export default Index;
