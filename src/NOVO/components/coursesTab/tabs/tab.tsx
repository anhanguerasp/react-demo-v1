import { useState } from "react";

import {
  GraduaçãoCursosWidget,
  TecnicoCursosWidget,
} from "../coursesList/list";
import { useNavigate } from "react-router-dom";

interface props {
  type: string;
  modalidades: Array<string>;
  topics: Array<string>;
  topicsContent: Array<string>;
  button?: boolean;
  buttonContent: string;
}
const Tab = ({
  type,
  modalidades,
  topics,
  topicsContent,
}: /*button,
  buttonContent,*/
props) => {
  const [showCourses, setShowCourses] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    window.scrollTo(0, 0);
    navigate("../cursos");
  };

  // Correlação entre o array de topics e o array de conteudos

  /*for (let [x, y] of zip([topics, topicsContent])) {
    console.log(x, y);
  }*/

  return (
    <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        Modalidades
      </h3>
      <div className="flex mt-3 mb-8">
        {modalidades.map((modalidade) => (
          <div
            className="flex bg-teal-600 text-white p-3 rounded-full ml-2 cursor-pointer  content-center"
            style={{ fontWeight: "600" }}
          >
            {modalidade}
          </div>
        ))}
      </div>
      <ul className="ml-5 list-disc">
        {topics.map((e, i) => (
          <li className="mt-3">
            <span style={{ fontWeight: "600" }}>{e}</span>: {topicsContent[i]}
          </li>
        ))}
      </ul>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 font-bold mt-3"
        type="button"
        onClick={() => handleNavigate()}
      >
        Encontre seu curso{" "}
      </button>
      {/*type == "Pós-graduação" ? (
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 font-bold mt-3"
          type="button"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1U7ldMWffZDWO8ObObQNzhkGG5eOHVL99/view?usp=sharing",
              "_blank"
            )
          }
        >
          Encontre seu curso{" "}
        </button>
      ) : (
        <button
          id="dropdownDefaultButton"
          className="text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 font-bold mt-3 mb-5"
          type="button"
          onClick={() => setShowCourses(!showCourses)}
        >
          Encontre seu curso{" "}
          <svg
            className="w-2.5 h-2.5 ms-3"
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
        </button>
      )*/}

      {/*type != "Pós-graduação" && type == "Graduação" ? (
        <GraduaçãoCursosWidget show={showCourses} />
      ) : (
        <TecnicoCursosWidget show={showCourses} />
      )*/}
    </div>
  );
};
export default Tab;
