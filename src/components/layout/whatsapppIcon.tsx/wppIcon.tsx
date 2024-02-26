import { useState } from "react";

export const WppIcon = () => {
  const [assunto, setAssunto] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div style={{}}>
      <div
        className={`bg-gray-300 rounded-lg`}
        style={
          show
            ? {
                position: "fixed",
                //bottom: 5,
                bottom: 165,
                right: 22,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                zIndex: "5",
                height: "auto",
                width: "345px",
                //padding: "5px 10px",
              }
            : {
                display: "none",
              }
        }
      >
        <div className="w-full">
          <div
            className="flex h-16 bg-green-400 content-center w-full rounded-t-lg px-5 py-3 mb-2 h-36"
            style={{ backgroundColor: "rgb(45, 183, 66)", width: "100%" }}
          >
            <img src="/img/whatsapp-32.png" style={{ height: 35 }} />

            <div>
              <p className="text-lg mb-3 text-white font-bold px-2">
                Iniciar atendimento
              </p>
              <p
                className="text-sm mb-3 text-gray-200 font-bold px-2 w-full"
                style={{ fontSize: "13px" }}
              >
                Selecione uma das opções abaixo e converse com a gente pelo{" "}
                <strong>Whatsapp</strong>
              </p>
            </div>
          </div>
        </div>

        <div>
          <button
            className="searched-option-button bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded flex
            
            focus:ring-4 focus:outline-none focus:ring-orange-300 mb-3"
            style={{ minWidth: 0 }}
            onClick={() => setAssunto("CURSOS")}
          >
            Cursos
          </button>

          <button
            className="searched-option-button bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded flex
            focus:ring-4 focus:outline-none focus:ring-orange-300 mb-3"
            style={{ minWidth: 0 }}
            onClick={() => setAssunto("GRADUAÇÃO")}
          >
            Graduação
          </button>

          <button
            className="searched-option-button bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded flex
            focus:ring-4 focus:outline-none focus:ring-orange-300"
            mb-3
            style={{ minWidth: 0 }}
            onClick={() => setAssunto("")}
          >
            Outros
          </button>
        </div>
        <div
          className="rounded-lg px-4 py-2 bg-teal-500 text-white text-sm hover:bg-teal-800 mt-3 mb-3"
          onClick={() =>
            window.open(
              `https://wa.me/5511969510032/?text=${
                assunto
                  ? assunto == "CURSOS"
                    ? "Olá, gostaria de tirar dúvidas referentes aos " +
                      assunto +
                      " disponibilizados pela Anhanguera"
                    : "Olá, gostaria de tirar dúvidas referente à " +
                      assunto +
                      " disponibilizada pela Anhanguera"
                  : "Olá, gostaria de tirar algumas dúvidas"
              }`
            )
          }
        >
          Iniciar Conversa
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          //bottom: 5,
          bottom: 105,
          right: 22,
          display: "flex",
          alignItems: "center",
          zIndex: "5",
        }}
      >
        <p className="bg-gray-200 text-sm flex justify-center text-gray-600 px-2 py-2 mr-2 rounded-full">
          Clique aqui para falar conosco.{"  "}
        </p>
        <div
          style={{
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            width: "46px",
            height: "50px",
          }}
          onClick={() => setShow(!show)}
        >
          <span className="absolute flex h-12 w-12">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
          </span>
          <img src="/img/whatsapp-svgrepo-com.svg" />
        </div>
      </div>
    </div>
  );
};