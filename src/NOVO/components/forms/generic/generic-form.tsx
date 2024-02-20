import axios from "axios";
import { useState } from "react";
import { IMatricula } from "../../../../models/afiliados/IMatricula";
import { handlePhone } from "../../../../hooks/input/handlePhone";
import { handleCPF } from "../../../../hooks/input/handleCPF";
import { SwitchFormulary } from "../../../../components/layout/formularies/basic/swirchFormularie";

type props = {
  partner: string;
};

export const NewGenericForm = ({ partner }: props) => {
  const [showSuccess, setShowSuccess] = useState(Boolean);
  const [couseType, setTypeCourse] = useState("");
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [modalidade, setModalidade] = useState("");
  const [curso, setCurso] = useState("");
  const [polo, setPolo] = useState("");

  const handleCurso = (e: any) => {
    setCurso(e);
  };

  const date = new Date();

  const formatedDate = `${date.getUTCDate().toString().padStart(2, "0")}/${(
    date.getUTCMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;

  const body: IMatricula = {
    data: formatedDate,
    nome: name,
    email: email,
    telefone: phone,
    modalidade: modalidade,
    parceria: partner,
    tipo: couseType,
    curso: curso,
    polo: polo,
    CPF: cpf,
  };

  console.log(body);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post("https://api.sheetmonkey.io/form/uwnN9fSvLjroHLkpXPQsmk", body, {
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

  console.log(showSuccess);

  return (
    <>
      <form
        method="post"
        className="w-full  md:w-1/2 bg-white p-12 dark:bg-gray-900 md:rounded-r-lg"
        onSubmit={(e: any) => handleSubmit(e)}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
              htmlFor="grid-first-name"
            >
              Nome
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white d"
            id="grid-first-name ${
              name.length ? "border-gray-200" : "border-red-500"
            }`}
              type="text"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
            <p
              className="text-red-500 text-xs italic"
              style={name.length ? { display: "none" } : {}}
            >
              Por favor, preencha esse campo.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
              htmlFor="grid-last-name"
            >
              telefone
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Telefone"
              onChange={(e) => setPhone(e.target.value)}
              onKeyUp={(e) => handlePhone(e)}
              maxLength={15}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
              htmlFor="grid-password"
            >
              CPF
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="CPF"
              maxLength={16}
              onChange={(e) => setCpf(e.target.value)}
              onKeyUp={(e) => handleCPF(e)}
            />
            <p className="text-gray-600 text-xs italic">
              Insira um CPF válido no seguinte formato : 000.000.000-00
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
              htmlFor="grid-password"
            >
              EMAIL
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                email.length ? "" : "border-red-500"
              }`}
              id="grid-password"
              type="text"
              placeholder="EMAIL"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p
              className="text-red-500 text-xs italic"
              style={email.length ? { display: "none" } : {}}
            >
              Por favor, preencha esse campo.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
              htmlFor="grid-state"
            >
              Modalidade
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) => setModalidade(e.target.value)}
              >
                <option value="" disabled selected>
                  Escolha a Modalidade
                </option>
                <option>100% EAD</option>
                <option>Presencial</option>
                <option>Semi-Presencial</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
              htmlFor="grid-state"
            >
              Tipo de curso
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) => setTypeCourse(e.target.value)}
              >
                <option value="" disabled selected>
                  Escolha o Tipo de Curso
                </option>
                <option value="Graduação">Graduação</option>
                <option value="Pós-graduação">Pós-graduação</option>
                <option value="Cursos Técnicos">Cursos técnicos</option>
                <option value="Cursos Livres">Cursos Livres</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-7">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
              htmlFor="grid-state"
            >
              Curso de Interesse
            </label>
            <div className="relative">
              <SwitchFormulary
                handleCourse={handleCurso}
                courseType={couseType}
              />

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-7">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
              htmlFor="grid-state"
            >
              Polo de Interesse
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) => setPolo(e.target.value)}
              >
                <option value="" disabled selected>
                  Escolha o Polo
                </option>
                <option value="Araraquara">Araraquara</option>
                <option value="Barueri">Barueri</option>
                <option value="Bauru">Bauru</option>
                <option value="Cidade Tiradentes">Cidade Tiradentes</option>
                <option value="Jabaquara">Jabaquara</option>
                <option value="Limeira">Limeira</option>
                <option value="Paulista">Paulista</option>
                <option value="Pirapora do Bom Jesus">
                  Pirapora do Bom Jesus
                </option>
                <option value="Republica">República</option>
                <option value="Rio Claro">Rio Claro</option>
                <option value="Santa Gertrudes">Santa Gertrudes</option>
                <option value="Santana de Parnaiba">Santana de Parnaiba</option>
                <option value="sao miguel">São Miguel</option>
                <option value="Tatuape">Tatuapé</option>
                <option value="Vila Matilde">Vila Matilde</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-m border-4 text-white py-5 px-7 rounded mt-3 mb-3"
          type="submit"
        >
          Inscreva-se
        </button>
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
            <div className="font-bold text-xl">Seu formulário foi enviado!</div>

            <div>Seu formulário foi enviado com sucesso! Muito obrigado.</div>
          </div>
        </div>
      </form>
    </>
  );
};
