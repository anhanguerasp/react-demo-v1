import React from "react";
import { ConcursoFormulary } from "../formulary/concurso-formulary";
// nome email tel turm-dia polo data
interface props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  ref: HTMLDivElement;
}

type Ref = props;

export const divRef = { current: null };

export const Landing = React.forwardRef<HTMLDivElement, Ref>(
  ({ ...props }, ref) => {
    return (
      <>
        <main>
          <div
            className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh",
            }}
          >
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-75 bg-black"
              ></span>
            </div>
            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-2">
                    <h4 className="text-orange-500 font-semibold text-4xl lg:text-5xl">
                      Curso Preparatório para concurso público de Diretor
                      Escolar PMSP
                    </h4>
                    <p className="mt-4 text-lg text-gray-100 font-semibold">
                      Curso Preparatório focado para concurso público de Diretor
                      Escolar PMSP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              style={{ height: "70px" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-gray-300 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </div>

          <section className="pb-20 bg-gray-300 -mt-24">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                        <i className="fas fa-award"></i>
                      </div>
                      <h6 className="text-xl font-semibold text-black">
                        Conteúdo
                      </h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        <ul>
                          <li>Legislação e Publicações Federais</li>
                          <li>Legislação e Publicações Municipais</li>
                          <li>Documentos Institucionais</li>
                          <li>Parte Discursiva</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                        <i className="fa fa-retweet"></i>
                      </div>
                      <h6 className="text-xl font-semibold text-black">
                        Investimento
                      </h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        R$ 1.000,00 em até 4X no cartão
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                        <i className="fas fa-fingerprint"></i>
                      </div>
                      <h6 className="text-xl font-semibold text-black">
                        Especialistas{" "}
                      </h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        Tenha aula com especialistas na área do Direito e com
                        ex-diretores PMSP
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center mt-32">
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                  <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                    <i className="fas fa-user-friends text-xl"></i>
                  </div>
                  <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    Turmas e Carga Horária
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                    No Curso Preparatório para concurso público de Diretor
                    Escolar PMSP, você pode escolher estudar durante a semana ou
                    aos sábados, de acordo com sua disponibilidade.
                  </p>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                    Venha estimular seu aprendizado em um ambiente dinâmico, com
                    aulas ministradas por especialistas da área prontos para te
                    ensinar da melhor maneira.
                  </p>
                  <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"></p>
                </div>

                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-orange-500">
                    <img
                      alt="..."
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block"
                        style={{
                          height: "95px",
                          top: "-94px",
                        }}
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-orange-500 fill-current"
                        ></polygon>
                      </svg>
                      <h4 className="text-xl font-bold text-white">
                        Carga Horária
                      </h4>
                      <p className="text-md font-light mt-2 text-white">
                        O curso oferece{" "}
                        <span className="font-bold">80 horas</span>, de conteúdo
                        imperdível, distribuídos entre teoria e prática.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-20">
            <div
              className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
              style={{ height: "80px" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-white fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>

            <div className="container mx-auto px-4">
              <div className="items-center flex flex-wrap">
                {/*<div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
                    </div>*/}
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                  <div className="md:pr-12">
                    <div className="text-orange-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-orange-300">
                      <i className="fas fa-building text-xl"></i>
                    </div>
                    <h3 className="text-3xl font-semibold">Localidades</h3>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                      Escolha o melhor local para estudar :
                    </p>
                    <ul className="list-none mt-6">
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-orange-200 mr-3">
                              <i className="fas fa-home"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-gray-600">
                              Polo Anhanguera - São Miguel Paulista - AV
                              Nordestina 1455
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-500 bg-orange-200 mr-3">
                              <i className="fas fa-home"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-gray-600">
                              Polo Anhanguera - Tatuapé - Rua Apucarana 523
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*<section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={"/img/team-1-800x800.jpg"}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ryan Tompson</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={"/img/team-2-800x800.jpg"}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={"/img/team-3-800x800.jpg"}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={"/img/team-4-470x470.png"}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                    </section>*/}

          <section className="pb-20 relative block bg-gray-900">
            <div
              className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
              style={{ height: "80px" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-gray-900 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>

            <div className="container mx-auto px-4 lg:pt-24 lg:pb-64" ref={ref}>
              <div className="flex flex-wrap text-center justify-center">
                <div className="w-full lg:w-6/12 px-4">
                  <h2 className="text-4xl font-semibold text-orange-500">
                    Não perca tempo!
                  </h2>
                  <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-300">
                    Preencha o formulário e converse conosco pelo WhatsApp.
                  </p>
                </div>
              </div>
              {/*<div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-user text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Valter Teófilo
                </h5>
                <p className="mt-2 mb-4 text-gray-300 font-semibold">
                  DIRETOR APOSENTADO PMSP
                </p>
                <div className="flex justify-center align-center content-center items-center">
                  <div className="text-gray-900 p-3 w-6 h-6 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-phone text-md"></i>
                  </div>
                  <p className="mt-2 mb-4 text-gray-300 ml-2">
                    (11) 98164-4181
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-user text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Edison Robson
                </h5>
                <p className="mt-2 mb-4 text-gray-300 font-semibold">
                  PROFESSOR DE LEGISLAÇÃO - ADVOGADO
                </p>
                <div className="flex justify-center align-center content-center items-center">
                  <div className="text-gray-900 p-3 w-6 h-6 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-phone text-md"></i>
                  </div>
                  <p className="mt-2 mb-4 text-gray-300 ml-2">
                    (11) 99143-0410
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-user text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Tânea Maranesi
                </h5>
                <p className="mt-2 mb-4 text-gray-300 font-semibold">
                  DIRETORA APOSENTADA PMSP
                </p>
                <div className="flex justify-center align-center content-center items-center">
                  <div className="text-gray-900 p-3 w-6 h-6 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-phone text-md"></i>
                  </div>
                  <p className="mt-2 mb-4 text-gray-300 ml-2">
                    (11) 97634-3854
                  </p>
                </div>
              </div>
                  </div>*/}
            </div>
          </section>

          <section className="relative block py-24 lg:pt-0 bg-gray-900">
            <div className="container mx-auto px-4 relative">
              <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                    <div className="flex-auto p-5 lg:p-10">
                      <h4 className="text-2xl font-semibold">
                        Preencha o formulário
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                        Não se preocupe, seus dados estarão protegidos com a
                        gente.
                      </p>
                      <ConcursoFormulary />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
);
