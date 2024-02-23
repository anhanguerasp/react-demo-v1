import axios from "axios";
import { useState } from "react";

interface props {
  onClick: () => void;
  show: boolean;
}

const ufLista = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

export const ModalConsult = ({ show, onClick }: props) => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [cidade, setCidade] = useState("");
  const [aluno, SetAluno] = useState(null);
  const [uf, setUf] = useState("");

  let alunoResp = null;

  if (aluno) {
    if (aluno == "1") {
      alunoResp = "SIM";
    } else {
      alunoResp = "NÃO";
    }
  }

  const body = {
    nome: nome,
    cpf: cpf,
    email: email,
    cidade: cidade,
    UF: uf,
    aluno: alunoResp,
  };

  console.log(body);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await axios.post(
      "https://api.sheetmonkey.io/form/vecfq41TMQCQFNvWevAESR",
      body
    );
  };

  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        show ? "" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"`}
    >
      <div className="relative p-4 w-full max-w-1xl max-h-full">
        <div className="relative bg-gray-200 rounded-lg shadow dark:bg-gray-900">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={onClick}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-4 md:p-5 space-y-4">
            <div className="mx-auto max-w-md px-6 py-12 bg-gray-100 border-0 shadow-lg sm:rounded-3xl dark:border-gray-600 dark:bg-gray-800">
              <h5 className="text-3xl font-bold mb-2 text-orange-500">
                Preencha suas informações
              </h5>
              <p className="text-gray-500 text-sm mb-8">
                Não se preocupe, seus dados estarão seguros com a gente!
              </p>
              <form id="form" noValidate onSubmit={(e) => handleSubmit(e)}>
                <div
                  className="relative z-0 w-full mb-5"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder=" "
                    required
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    onChange={(e) => setNome(e.target.value)}
                  />
                  <label
                    htmlFor="name"
                    className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 flex-initial"
                  >
                    Preencha seu nome
                  </label>
                  <span className="text-sm text-red-600 hidden " id="error">
                    O nome é campo obrigatório
                  </span>
                </div>

                <div className="relative z-0 w-full mb-5 flex">
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                  >
                    Preencha seu email
                  </label>
                  <span className="text-sm text-red-600 hidden" id="error">
                    O email é campo obrigatório
                  </span>
                </div>
                {/*<div className="relative z-0 w-full mb-5 flex">
                  <input
                    type="text"
                    name="cpf"
                    placeholder=" "
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    onChange={(e) => setCpf(e.target.value)}
                  />
                  <label
                    htmlFor="cpf"
                    className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                  >
                    Preencha seu CPF
                  </label>
                  <span className="text-sm text-red-600 hidden" id="error">
                    O CPF é campo obrigatório
                  </span>
                </div>*/}

                <div
                  className="relative z-0 w-full mb-5"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder=" "
                    required
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    onChange={(e) => setCidade(e.target.value)}
                  />
                  <label
                    htmlFor="name"
                    className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 flex-initial"
                  >
                    Preencha sua cidade
                  </label>
                  <span className="text-sm text-red-600 hidden " id="error">
                    A cidade é campo obrigatório
                  </span>
                </div>

                <div className="relative z-0 w-full mb-5 flex">
                  <select
                    name="select"
                    value={uf}
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    onChange={(e) => setUf(e.target.value)}
                  >
                    <option value="" selected disabled hidden></option>
                    {ufLista.map((uf) => (
                      <option value={uf}>{uf}</option>
                    ))}
                  </select>
                  <label
                    htmlFor="select"
                    className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                  >
                    Selecione sua UF
                  </label>
                  <span className="text-sm text-red-600 hidden" id="error">
                    Selecione uma das opções
                  </span>
                </div>

                <fieldset
                  className="relative z-0 w-full p-px mb-5 flex"
                  onChange={(e: any) => SetAluno(e.target.value)}
                >
                  <legend className="absolute text-gray-500 transform scale-75 -top-3 origin-0">
                    Você é aluno?
                  </legend>
                  <div className="block pt-3 pb-2 space-x-4">
                    <label>
                      <input
                        type="radio"
                        name="radio"
                        value="1"
                        className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                      />
                      Sim
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="radio"
                        value="2"
                        className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                      />
                      Não
                    </label>
                  </div>
                  <span className="text-sm text-red-600 hidden" id="error">
                    Option has to be selected
                  </span>
                </fieldset>

                <button
                  id="button"
                  type="submit"
                  className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-orange-500 hover:bg-orange-600 hover:shadow-lg focus:outline-none"
                >
                  Inscreva-se
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
