import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { Step0 } from "./components/step0";
import { Step1 } from "./components/step1";
import { Step2 } from "./components/step2";
import { Step3 } from "./components/step3";
import { Step4 } from "./components/step4";
import { EntryMotion } from "./components/entry-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";
import axios from "axios";

export type FormData = {
  name: string;
  email: string;
  cpf?: string;
  modality?: string;
  courseType?: string;
  course?: string;
  polo?: string;
  phone: string;
  isMonthlyPlan: boolean;
  plan: {
    type: string;
    price: number;
  };
  addOns: {
    type: string;
    name: string;
    price: number;
  }[];
};

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  cpf: "",
  modality: "",
  course: "",
  courseType: "",
  polo: "",
  isMonthlyPlan: true,
  plan: {
    type: "Arcade",
    price: 9,
  },
  addOns: [],
};

const STEPS = ["Cadastro", "Converse conosco"];
function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (data: Partial<FormData>) => {
    setData((prevData) => ({ ...prevData, ...data }));
  };
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    CurrentStepComp,
    currentStepIndex,
    gotoStep,
    next,
    prev,
    steps,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([Step0, Step4]);

  // Sheet monkeys post logic

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentStepIndex !== steps.length - 1) return next();
    setIsSubmitted(true);
  };
  console.log(data);

  const handlePost = (e: any, data: any) => {
    e.preventDefault();

    /*axios.post("https://api.sheetmonkey.io/form/uwnN9fSvLjroHLkpXPQsmk", data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });*/
  };

  //
  const handleWppRedirect = () => {
    window.open(
      `https://wa.me/5511969510032/?text=${
        "Olá, meu nome é " +
        data.name +
        " e estou interessado(a) em me matricular no curso de " +
        data.course +
        ", na modalidade " +
        data.modality +
        " - " +
        data.courseType +
        ", no polo " +
        data.polo
      }`
    );
  };
  const submitBody = {
    nome: data.name,
    email: data.email,
    telefone: data.phone,
    cpf: data.cpf,
    modalidade: data.modality,
    tipo: data.courseType,
    curso: data.course,
    polo: data.polo,
  };

  return (
    <div
      className="flex flex-wrap justify-center align-center absolute h-screen bg-gray-200 w-full"
      style={{ zIndex: 16 }}
    >
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col lg:w-1/2 lg:flex-row lg:gap-4 lg:rounded lg:bg-white lg:p-4 lg:shadow"
        style={{ height: "auto" }}
      >
        <div className="flex h-40 items-center justify-center gap-2 bg-sidebar-mobile bg-cover bg-no-repeat lg:h-auto lg:w-1/3 lg:flex-col lg:items-stretch lg:justify-stretch lg:gap-4 lg:rounded-lg lg:bg-sidebar-desktop lg:px-4 lg:py-8">
          {Array(steps.length)
            .fill(0)
            .map((_, ind) => {
              return (
                <div key={ind} className="lg:flex lg:gap-3">
                  <motion.div
                    initial={false} //disables the mount animation
                    animate={currentStepIndex === ind ? "active" : "inactive"}
                    variants={{
                      active: {
                        backgroundColor: "var(--orange-300)",
                        color: "var(--blue-900)",
                      },
                      inactive: {
                        backgroundColor: "transparent",
                        color: "var(--gray-500)",
                      },
                    }}
                    transition={{ duration: 0.5 }}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white`}
                  >
                    {ind + 1 !== 2 ? (
                      <i className="fa fa-user text-orange-700"></i>
                    ) : (
                      <i className="fab fa-whatsapp text-orange-700"></i>
                    )}
                  </motion.div>
                  <div className="hidden lg:block lg:text-gray-500">
                    <div className="text-sm font-light uppercase">{`Etapa ${
                      ind + 1
                    }`}</div>
                    <div className="uppercase font-semibold">{STEPS[ind]}</div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex h-[calc(100vh_-_14rem)] flex-col justify-between lg:h-full lg:w-3/4">
          <div className="relative -top-12 m-4  rounded bg-white px-4 py-8 shadow lg:static lg:h-full lg:p-0 lg:shadow-none">
            <AnimatePresence>
              <EntryMotion key={currentStepIndex + Number(isSubmitted)}>
                {isSubmitted ? (
                  <Step4 />
                ) : (
                  <CurrentStepComp
                    {...data}
                    updateFields={updateFields}
                    gotoStep={gotoStep}
                  />
                )}
              </EntryMotion>
            </AnimatePresence>
          </div>
          {!isSubmitted && (
            <div className="mb-4 flex justify-between p-4 lg:h-20 text-orange-500">
              {!isFirstStep && (
                <button type="button" onClick={prev}>
                  Voltar
                </button>
              )}
              <button
                type="submit"
                className="ml-auto rounded bg-blue-900 px-4 py-2 font-semibold text-blue-50 shadow"
                /*onClick={(e) => {
                  isLastStep ? handleWppRedirect : handlePost(e, submitBody);
                }}*/
              >
                {isLastStep ? "Confirmar" : "Avançar"}
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

const StepFormOk = App;

export default StepFormOk;
