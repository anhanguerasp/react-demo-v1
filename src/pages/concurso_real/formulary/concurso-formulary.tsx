import axios from "axios";
import { useState } from "react";
import { handlePhone } from "../../../hooks/input/handlePhone";
import { WppRedirect } from "../../../NOVO/layout/flootingFormulary/modal/wppRedirect/wppRedirect";
import { WppRedirectCurso } from "./wppRedirect";

export const ConcursoFormulary = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [turmaSab, setTurmaSab] = useState("");
  const [turmaSem, setTurmaSem] = useState("");
  const [polo, setPolo] = useState("");

  // form
  const [showSuccess, setShowSuccess] = useState(false);
  const [showRedirect, setShowRedirect] = useState(false);

  // NUMEROS DE TELEFONE
  const numerosTel = ["5511981644181"];

  const date = new Date();

  const formatedDate = `${date.getUTCDate().toString().padStart(2, "0")}/${(
    date.getUTCMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;

  const body = {
    data: formatedDate,
    nome: name,
    telefone: phone,
    email: email,
    turma: turmaSab,
    polo: polo,
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post("https://api.sheetmonkey.io/form/xxtW6vWt7sX14zr8uECx29", body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    setShowSuccess(true);

    setShowRedirect(true);

    setTimeout(() => {
      window.open(
        `https://wa.me/5511981644181/?text=${
          "Olá, meu nome é " +
          name +
          " e estou interessado(a) em me matricular no Curso Preparatório para concurso público de Diretor Escolar PMSP"
        }`
      );
    }, 2300);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3300);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="relative w-full mb-3 mt-8">
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor="full-name"
        >
          Nome completo
        </label>
        <input
          type="text"
          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          placeholder="Nome Completo"
          style={{ transition: "all .15s ease" }}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          placeholder="Email"
          style={{ transition: "all .15s ease" }}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap relative w-full mb-3">
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor="message"
        >
          Telefone
        </label>
        <input
          type="text"
          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          placeholder="Telefone"
          style={{ transition: "all .15s ease" }}
          onKeyUp={(e) => handlePhone(e)}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={15}
        />
      </div>

      <div className="flex flex-wrap relative w-full mb-3">
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor="message"
        >
          Selecione sua turma
        </label>
        <select
          name="tipo"
          typeof="select"
          id="tipo de curso"
          onChange={(e: any) => setTurmaSab(e.target.value)}
          required
          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          style={{ transition: "all .15s ease" }}
        >
          <option value="" disabled selected>
            Escolha uma turma
          </option>
          <option value="Aos sábados">Aos Sábados</option>
          <option value="Dia da Semana">Dia da semana</option>
        </select>
      </div>
      {/*<div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 mb-3 justify-center">
        <input
          id="bordered-radio-1"
          type="radio"
          value="Dia de Semana"
          name="bordered-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={(e) => setTurmaSem(e.target.value)}
        />
        <label
          htmlFor="bordered-radio-1"
          className="w-full py-4 ms-2 text-base text-gray-900 dark:text-gray-300 font-bold"
        >
          Dia de semana
        </label>
      </div>
      <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 mb-3">
        <input
          id="bordered-radio-2"
          type="radio"
          value="Aos Sábados"
          name="bordered-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={(e) => setTurmaSab(e.target.value)}
        />
        <label
          htmlFor="bordered-radio-2"
          className="w-full py-4 ms-2 text-base font-bold text-gray-900 dark:text-gray-300"
        >
          Aos Sábados
        </label>
  </div>*/}

      <div className="flex flex-wrap relative w-full mb-3">
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor="message"
        >
          Selecione o Polo de interesse
        </label>

        <select
          name="tipo"
          typeof="select"
          id="tipo de curso"
          onChange={(e: any) => setPolo(e.target.value)}
          required
          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          style={{ transition: "all .15s ease" }}
        >
          <option value="" disabled selected>
            Escolha um polo
          </option>
          <option value="São Miguel">
            Polo Anhanguera - São Miguel Paulista - AV Nordestina 1455
          </option>
          <option value="Tatuapé">
            Polo Anhanguera - Tatuapé - Rua Apucarana 523
          </option>
        </select>
      </div>

      <div className="text-center mt-6">
        <button
          className="bg-orange-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="submit"
          style={{ transition: "all .15s ease" }}
        >
          Inscreva-se
        </button>
      </div>

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
      <WppRedirectCurso showRedirect={showRedirect} />
    </form>
  );
};
