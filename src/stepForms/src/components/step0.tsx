import axios from "axios";
import { SwitchFormulary } from "../../../components/layout/formularies/basic/swirchFormularie";
import { FormData } from "../App";
import React, { useState } from "react";
import { handleCPF } from "../../../hooks/input/handleCPF";
import { handlePhone } from "../../../hooks/input/handlePhone";
import "./steps.style.scss";

type UpdateFields = (data: Partial<FormData>) => void;

type Props = FormData & { updateFields: UpdateFields };
export const Step0 = ({
  name,
  email,
  phone,
  cpf,
  course,
  courseType,
  modality,
  polo,
  updateFields,
}: Props) => {
  return (
    <div
      className="h-[360px] md:h-[410px] lg:h-[450px] p-5"
      //style={{ border: "2px solid red" }}
      style={{
        overflowY: "scroll",
        display: "block",
        flexWrap: "wrap",
        //height: "370px",
      }}
    >
      <h4 className="text-2xl font-bold text-orange-500">
        ANTES DE COMEÇARMOS
      </h4>
      <p className="text-base font-bold dark:text-gray-300 text-gray-600">
        queremos saber um pouquinho sobre você!!
      </p>
      <p className="text-base text-gray-500 dark:text-gray-300">
        Não se preocupe, seus dados estão seguros com a gente.
      </p>
      <div>
        <div className="mt-4 flex flex-col gap-2">
          <div>
            <label
              className="block font-semibold text-blue-900 dark:text-gray-200"
              htmlFor="name"
            >
              Nome Completo
            </label>
            <input
              id="name"
              value={name}
              required
              onChange={(e) => updateFields({ name: e.target.value })}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              name="name"
              type="text"
            />
          </div>
          <div>
            <label
              className="block font-semibold text-blue-900 dark:text-gray-200"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              value={email}
              required
              onChange={(e) => updateFields({ email: e.target.value })}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              name="email"
              type="email"
            />
          </div>
          <div>
            <label
              className="block font-semibold text-blue-900 dark:text-gray-200"
              htmlFor="cpf"
            >
              CPF
            </label>
            <input
              id="cpf"
              value={cpf}
              onChange={(e) => updateFields({ cpf: e.target.value })}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              name="phone"
              required
              type="tel"
              onKeyUp={(e) => handleCPF(e)}
            />
          </div>
          <div>
            <label
              className="block font-semibold text-blue-900 dark:text-gray-200"
              htmlFor="phone"
            >
              Número de telefone
            </label>
            <input
              id="phone"
              value={phone}
              onChange={(e) => updateFields({ phone: e.target.value })}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              name="phone"
              required
              type="tel"
              maxLength={15}
            />
          </div>

          <div>
            <label
              className="block font-semibold text-blue-900 dark:text-gray-200"
              htmlFor="modalidade"
            >
              Modalidade
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                id="grid-state"
                onChange={(e) => updateFields({ modality: e.target.value })}
                value={modality}
              >
                <option value="" disabled selected>
                  Escolha a Modalidade
                </option>
                <option>100% EAD</option>
                <option>Presencial</option>
                <option>Semi-Presencial</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>
          </div>

          <div className="w-full md:w-2/2 md:mb-0">
            <label
              className="block font-semibold text-blue-900 dark:text-gray-200"
              htmlFor="grid-state"
            >
              Tipo de curso
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                id="grid-state"
                onChange={(e) => updateFields({ courseType: e.target.value })}
                value={courseType}
              >
                <option value="" disabled selected>
                  Escolha o Tipo de Curso
                </option>
                <option value="Graduação">Graduação</option>
                <option value="Pós-graduação">Pós-graduação</option>
                <option value="Cursos Técnicos">Cursos técnicos</option>
                <option value="Cursos Livres">Cursos Livres</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>
          </div>

          <div className="w-full md:w-2/2 md:mb-0">
            <label
              className="block font-semibold text-blue-900 dark:text-gray-200"
              htmlFor="grid-state"
            >
              Curso de Interesse
            </label>
            <div className="relative">
              <SwitchFormulary
                updateFields={updateFields}
                courseType={courseType ? courseType : "Graduação"}
                courseValue={course}
              />

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>
          </div>

          <div className="w-full md:w-2/2 md:mb-0">
            <label
              className="block font-semibold text-blue-900 dark:text-gray-200"
              htmlFor="grid-state"
            >
              Polo de Interesse
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                id="grid-state"
                value={polo}
                onChange={(e) => updateFields({ polo: e.target.value })}
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
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
