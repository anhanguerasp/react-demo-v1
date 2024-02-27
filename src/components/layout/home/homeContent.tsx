import { minicarouselhomelist } from "../../../utils/listas/mini-carousel";
import { MiniCarouselList } from "../miniCarousel/MiniCarousel.module";
import styles from "./homeContent.module.scss";

export const HomeContent = () => {
  return (
    <div>
      <section className={`${styles.section}`}>
        <h1 className="mt-12 text-4xl md:text-5xl lg: text-5xl font-semibold">
          Especialidades!
        </h1>
        <div className={styles.containerEspecialidade}>
          <div className={styles.item}>
            <img
              className={styles.imagemEspecialidade}
              src="/img/chapeu.png"
              alt="Imagem Esquerda 1"
            />
            <div className={styles.texto}>
              <h2>Graduação</h2>
              <p>
                Nossos cursos de graduação são projetados para oferecer uma
                experiência de aprendizado desafiadora e envolvente, preparando
                nossos alunos para os desafios do mercado de trabalho. Com um
                corpo docente altamente qualificado e uma variedade de recursos,
                nossos cursos oferecem aos alunos as habilidades práticas e
                conhecimentos teóricos necessários para ter sucesso em suas
                carreiras.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <img
              className={styles.imagemEspecialidade}
              src="./img/curriculo.png"
              alt="Imagem Esquerda"
            />
            <div className={styles.texto}>
              <h2>Pós Graduação</h2>
              <p>
                Nossos cursos de pós-graduação são projetados para preparar os
                alunos para se destacarem em suas áreas de atuação,
                fornecendo-lhes habilidades e conhecimentos avançados, além de
                uma rede de contatos que os ajudará a avançar em suas carreiras.
                Nossos programas são liderados por profissionais experientes e
                altamente qualificados, e oferecem oportunidades práticas de
                aprendizado que combinam teoria e prática para que os alunos
                possam aplicar o que aprendem na sala de aula ao mundo real.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <img
              className={styles.imagemEspecialidade}
              src="./img/carteira-de-trabalho.png"
              alt="Imagem Esquerda 3"
            />
            <div className={styles.texto}>
              <h2>Cursos Técnicos</h2>
              <p>
                Nossos cursos técnicos são a porta de entrada para uma carreira
                de sucesso. Projetados sob medida para preparar você para o
                mercado de trabalho em tempo recorde, nossos programas oferecem
                um mergulho profundo em sua área de interesse. Se você está
                buscando uma maneira eficaz de adquirir habilidades práticas e
                conquistar o emprego dos seus sonhos, nossos cursos técnicos são
                a escolha certa.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <img
              className={styles.imagemEspecialidade}
              src="./img/cracha.png"
              alt="Imagem Esquerda 4"
            />
            <div className={styles.texto}>
              <h2>Cursos de Qualificação</h2>
              <p>
                Nossos cursos de qualificação oferecem uma oportunidade única
                para aprender novas habilidades, aprimorar sua carreira ou se
                aprofundar em um hobby. Com conteúdo prático e atualizado, você
                poderá escolher entre uma variedade de cursos em diversas áreas,
                desde marketing digital até culinária. Nossos cursos são
                ministrados por profissionais experientes e oferecem
                flexibilidade para você estudar no seu próprio ritmo. Com nossos
                cursos livres, você pode adquirir conhecimentos valiosos para
                aprimorar sua vida pessoal ou profissional.
              </p>
              <a
                className={styles.cursosUp}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1YkbkIBeTXbshNRAs8b0QCbTQBiReQt0a/view"
                  )
                }
              >
                Confira aqui os cursos de qualificação disponíveis
              </a>
            </div>
          </div>
        </div>
      </section>

      <article className={styles.bg}>
        <h1 className={styles.containerCursos}>
          Conheça alguns dos nossos cursos
        </h1>
        <MiniCarouselList imageList={minicarouselhomelist} />
        <p className={styles.condicoes}>*consulte condições</p>
      </article>

      <article className={styles.tecnologiaBg}>
        <div className={`${styles.tecnologia} ${styles.containerDiferenciais}`}>
          <div className={styles.tecnologiaConteudo}>
            <span className={styles.dif}>Diferenciais Anhanguera</span>
            <h2 style={{ textAlign: "justify" }}>
              Por que você deveria estudar na anhanguera?
            </h2>
            <div className={styles.tecnologiaVantagens}>
              <div>
                <img
                  src="/img/apoio-personalizado.svg"
                  width="24"
                  height="24"
                  alt=""
                />
                <h3>Apoio Personalizado</h3>
                <p>
                  Na Anhanguera você é único e cada fase da sua formação
                  acadêmica é acompanhada bem de perto. Por meio da maior e
                  melhor plataforma de ensino adaptativo do mundo, que usa
                  inteligência artificial para identificar pontos do seu
                  aprendizado que precisam ser melhorados, você terá um plano de
                  estudo individualizado e gamificado que desenvolve os
                  conteúdos que você tem mais dificuldade.
                </p>
              </div>
              <div>
                <img
                  src="/img/sistema-ensino.svg"
                  width="24"
                  height="24"
                  alt=""
                />
                <h3>Sistema de Ensino</h3>
                <p>
                  A Anhanguera te prepara para o mercado de trabalho de um jeito
                  dinâmico, com um ambiente virtual de aprendizagem e
                  disciplinas interativas. O sistema de ensino une a teoria à
                  prática de forma equilibrada para que você possa se
                  desenvolver como um profissional completo e tenha sucesso na
                  sua carreira.
                </p>
              </div>
              <div>
                <img
                  src="/img/trilhas-carreira.svg"
                  width="24"
                  height="24"
                  alt=""
                />
                <h3>Trilhas de Carreira</h3>
                <p>
                  Nas trilhas de carreira, estão disponíveis atividades
                  extracurriculares que auxiliam no desenvolvimento de
                  habilidades sociais e emocionais complementares para você se
                  tornar o profissional que o mercado procura. Todas as
                  atividades são gratuitas e 100% online e você escolhe qual
                  combina mais com você.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.tecnologiaImagem}>
            <img
              src="/img/diferenciais-imagem.png"
              width="444"
              height="677"
              alt="diferencias"
            />
          </div>
        </div>
      </article>
    </div>
  );
};
