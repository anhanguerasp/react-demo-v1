import { useState } from "react";
import "./style.scss";
import { TesteModal } from "./teste";
interface props {
  show: boolean;
  onClick: () => void;
}
const button = ({ show, onClick }: props) => {
  return (
    <>
      {/*<div
        className={`formulary-container min-h-screen bg-gray-100 p-0 sm:p-12 backdrop-blur-md bg-white/80 ${
          show ? "" : "hidden"
        }`}
      >
        <svg
          style={{
            color: "rgb(243, 113, 57)",
            height: "24px",
            display: "flex",
            float: "right",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          onClick={onClick}
        >
          <path
            d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
            fill="#f37139"
          ></path>
        </svg>

        <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
          <h4 className="text-2xl font-bold mb-8">Preencha suas informações</h4>
          <form id="form" noValidate>
            <div
              className="relative z-0 w-full mb-5"
              style={{ display: "flex" }}
            >
              <input
                type="text"
                name="name"
                placeholder=" "
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="name"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 flex-initial"
              >
                Enter name
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Name is required
              </span>
            </div>

            <div className="relative z-0 w-full mb-5 flex">
              <input
                type="email"
                name="email"
                placeholder=" "
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="email"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Enter email address
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Email address is required
              </span>
            </div>
            <div className="relative z-0 w-full mb-5 flex">
              <input
                type="password"
                name="password"
                placeholder=" "
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="password"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Enter password
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Password is required
              </span>
            </div>

            <fieldset className="relative z-0 w-full p-px mb-5 flex">
              <legend className="absolute text-gray-500 transform scale-75 -top-3 origin-0">
                Choose an option
              </legend>
              <div className="block pt-3 pb-2 space-x-4">
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="1"
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Option 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="2"
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Option 2
                </label>
              </div>
              <span className="text-sm text-red-600 hidden" id="error">
                Option has to be selected
              </span>
            </fieldset>

            <div className="relative z-0 w-full mb-5 flex">
              <select
                name="select"
                value=""
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              >
                <option value="" selected disabled hidden></option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                <option value="5">Option 5</option>
              </select>
              <label
                htmlFor="select"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Select an option
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Option has to be selected
              </span>
            </div>

            <button
              id="button"
              type="button"
              className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
            >
              Inscreva-se
            </button>
          </form>
        </div>
        </div>*/}

      <TesteModal show={show} onClick={onClick} />

      <div>
        <button
          className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
          onClick={onClick}
        >
          Se inscreva
        </button>
      </div>
    </>
  );
};

export default button;
