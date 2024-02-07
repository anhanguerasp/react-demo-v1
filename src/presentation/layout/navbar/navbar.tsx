import { useEffect, useState } from "react";
import Switcher from "../../components/navbar/Switcher/Swircher";

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a
          href="https://anhanguerasp.com.br/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://anhanguerasp.com.br/img/logo.svg"
            className="h-8"
            alt="Anhanguera Logo"
          />
        </a>

        <button
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-200 dark:text-orange-400 dark:hover:bg-orange-700 dark:focus:ring-orange-600"
          aria-controls="mega-menu-full"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full"
          className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-orange-500 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className="hide flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Parcerias{" "}
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
              </button>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Graduação
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pos-graduação
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Unidades
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-orange-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700"
                style={{ fontWeight: "bolder" }}
              >
                Inscreva-se
              </a>
            </li>
          </ul>
          {/*<Switcher />*/}
        </div>
      </div>

      <div
        id="mega-menu-full-dropdown"
        className="hidden mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
          <ul>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Amigo Vale pix</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Preencha o nossa formulário e receba um{" "}
                  <span style={{ color: "#fd7e14", fontWeight: "800" }}>
                    pix
                  </span>{" "}
                  de R$ 100,00 diretamente na sua conta!!
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Professor Vale Pix</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Preencha o nossa formulário e receba um{" "}
                  <span style={{ color: "#fd7e14", fontWeight: "800" }}>
                    pix
                  </span>{" "}
                  de R$ 100,00 diretamente na sua conta!!
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Domino's</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <span style={{ color: "#fd7e14", fontWeight: "800" }}>
                    Estudante
                  </span>{" "}
                  e{" "}
                  <span style={{ color: "#fd7e14", fontWeight: "800" }}>
                    Colaborador
                  </span>
                  , fique por dentro dos benefícios que a nossa parceria com a{" "}
                  <span style={{ color: "#fd7e14", fontWeight: "800" }}>
                    Domino's
                  </span>{" "}
                  trouxe a vocês.
                </span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Aport</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <span style={{ color: "#fd7e14", fontWeight: "800" }}>
                    Cliente Aport
                  </span>
                  {""}, descubra junto com a
                  <span style={{ color: "#fd7e14", fontWeight: "800" }}>
                    {" "}
                    Anhanguera
                  </span>{" "}
                  o seu futuro acadêmico.
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Acirc</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Agora, a Anhanguera Rio Claro estabeleceu uma parceria que
                  traz consigo uma gama de benefícios excepcionais para os
                  membros da Associação Comercial e Industrial de Rio Claro.
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Amai</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Conheça a{" "}
                  <span style={{ color: "#fd7e14", fontWeight: "600" }}>
                    Amai
                  </span>{" "}
                  e seus projetos de inclusão social.
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Unegro</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Saiba como a parceria entre a{" "}
                  <span style={{ color: "#fd7e14", fontWeight: "600" }}>
                    Anhanguera
                  </span>{" "}
                  e a{" "}
                  <span style={{ color: "#fd7e14", fontWeight: "600" }}>
                    UNEGRO
                  </span>{" "}
                  contribui para o acesso de pessoas negras à educação superior.
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
