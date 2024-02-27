import { useState } from "react";

const desc = [
  {
    key: 1,
    titulo: "O que é consultoria de educação?",
    content:
      "A Consultoria Educação é uma plataforma de vendas de cursos que paga premiações em dinheiro pelas matrículas realizadas. Aqui as comissões são de até R$300,00 por matrícula realizada e os ganhos são ilimitados, ou seja: quanto mais você vende, mais você ganha.",
    open: false,
  },

  {
    key: 2,
    titulo: "O que vou vender?",
    content:
      "A Consultoria Educação é uma plataforma de vendas de cursos que paga premiações em dinheiro pelas matrículas realizadas. Aqui as comissões são de até R$300,00 por matrícula realizada e os ganhos são ilimitados, ou seja: quanto mais você vende, mais você ganha.",
    open: false,
  },

  {
    key: 3,
    titulo:
      "Qual o investimento que tenho que fazer para ser um Consultor Educacional?",
    content:
      "Um Celular e rede wu-fi, maior investimento e  é tempo e dedicação.  Já que pode vender, em seu bairro, parentes, amigos em empresas,",
    open: false,
  },
];
const Item = () => {
  /*let obj = desc.filter((obj) => obj.key == 2);
  obj[0].open = true;

  console.log(obj[0]);*/
  const [desc1, setDesc1] = useState(false);
  const [desc2, setDesc2] = useState(false);
  const [desc3, setDesc3] = useState(false);

  const handleClick = (item: any) => {
    item.open = true;
  };

  return (
    <div>
      <div className="w-full">
        <div
          role="button"
          className="flex items-center w-2/2 p-3 leading-tight transition-all rounded-lg outline-none text-start focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 hover:bg-orange-500 hover:text-white font-semibold text-lg"
          //onClick={partner.handleShow}
          onClick={() => setDesc1(!desc1)}
        >
          O que é consultoria de educação?
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
        <span
          className={`text-md text-gray-500 dark:text-gray-400 flex flex-wrap ${
            desc1 ? "" : "hidden"
          }`}
        >
          A Consultoria Educação é uma plataforma de vendas de cursos que paga
          premiações em dinheiro pelas matrículas realizadas. Aqui as comissões
          são de até R$300,00 por matrícula realizada e os ganhos são
          ilimitados, ou seja: quanto mais você vende, mais você ganha.
        </span>
      </div>

      <div className="w-full">
        <div
          role="button"
          className="flex items-center w-2/2 p-3 leading-tight transition-all rounded-lg outline-none text-start focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 hover:bg-orange-500 hover:text-white font-semibold text-lg"
          //onClick={partner.handleShow}
          onClick={() => setDesc2(!desc2)}
        >
          O que vou vender?
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
        <span
          className={`text-md text-gray-500 dark:text-gray-400 flex flex-wrap ${
            desc2 ? "" : "hidden"
          }`}
        >
          Cursos variados de graduação, pós-graduação e cursos técnicos
        </span>
      </div>

      <div className="w-full">
        <div
          role="button"
          className="flex items-center w-2/2 p-3 leading-tight transition-all rounded-lg outline-none text-start focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 hover:bg-orange-500 hover:text-white font-semibold text-lg"
          //onClick={partner.handleShow}
          onClick={() => setDesc3(!desc3)}
        >
          Qual o investimento que tenho que fazer para ser um Consultor
          Educacional?
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
        <span
          className={`text-md text-gray-500 dark:text-gray-400 flex flex-wrap ${
            desc3 ? "" : "hidden"
          }`}
        >
          Um Celular e uma rede de internet de boa qualidade, dado a natureza do
          trabalho remoto
        </span>
      </div>
    </div>
  );
};

export default Item;
