import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { Step0 } from "./components/step0";

import { Step4 } from "./components/step4";
import { EntryMotion } from "./components/entry-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

import { faX } from "@fortawesome/free-solid-svg-icons";

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

interface props {
  show: boolean;
  handleClose: () => void;
}
export const StepFormOk = ({ show, handleClose }: props) => {
  const [data, setData] = useState(INITIAL_DATA);
  const [wppRedirect, setWppRedirect] = useState(false);
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
  const handleWppRedirect = () => {
    setWppRedirect(true);
  };

  const handlePost = (data: any) => {
    //e.preventDefault();
    axios.post("https://api.sheetmonkey.io/form/uwnN9fSvLjroHLkpXPQsmk", data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    handleWppRedirect();
  };

  //

  useEffect(() => {
    if (wppRedirect) {
      setTimeout(() => {
        window.open(
          `https://wa.me/${
            data.courseType != "Pós-graduação"
              ? "5511969510032"
              : "5511946307892"
          }/?text=${
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
      }, 3600);
    }
  }, [wppRedirect]);

  const date = new Date();
  const formatedDate = `${date.getUTCDate().toString().padStart(2, "0")}/${(
    date.getUTCMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;

  const submitBody = {
    nome: data.name,
    email: data.email,
    telefone: data.phone,
    CPF: data.cpf,
    modalidade: data.modality,
    tipo: data.courseType,
    curso: data.course,
    polo: data.polo,
    data: formatedDate,
  };

  //const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");

  return (
    <div
      className={`${
        show ? "" : "hidden"
      } flex flex-wrap justify-center align-center absolute w-full l-0 bottom-0 lg:py-10 h-full backdrop-blur-sm bg-black/60 z-20`}
      //style={{ border: "2px solid purple" }}
    >
      <form
        onSubmit={handleFormSubmit}
        //lg:h-[52rem]
        className={`flex flex-col lg:w-1/2 lg:flex-row lg:gap-4 lg:rounded lg:bg-white lg:shadow dark:lg:bg-gray-800 lg:h-[630px] p-4 fixed lg:top-2`}
        style={{
          //border: "2px solid green",
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        {/* Close modal */}
        <FontAwesomeIcon
          icon={faX}
          onClick={handleClose}
          className="xClose fa-solid fa-x text-orange-500"
          style={{ display: "flex", float: "right", clear: "both" }}
        />

        <div
          className="flex h-40 items-center justify-center gap-2 bg-sidebar-mobile bg-cover bg-no-repeat lg:h-auto lg:w-1/3 lg:flex-col lg:items-stretch lg:justify-stretch lg:gap-4 lg:rounded-lg lg:bg-sidebar-desktop lg:px-4 lg:py-8"
          //style={{ border: "2px solid green" }}
        >
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
                        backgroundColor: "var(--orange-200)",
                        color: "var(--blue-900)",
                      },
                      inactive: {
                        backgroundColor: "transparent",
                        color: "var(--gray-500)",
                      },
                    }}
                    transition={{ duration: 0.5 }}
                    className={`flex h-8 w-8 items-center justify-center rounded-full `}
                  >
                    {ind + 1 !== 2 ? (
                      <i className="fa fa-user text-orange-500"></i>
                    ) : (
                      <i className="fab fa-whatsapp text-orange-500"></i>
                    )}
                  </motion.div>
                  <div className="hidden lg:block lg:text-gray-500 dark:lg:text-gray-200">
                    <div className="text-sm font-light uppercase">{`Etapa ${
                      ind + 1
                    }`}</div>
                    <div className="uppercase font-semibold">{STEPS[ind]}</div>
                  </div>
                </div>
              );
            })}
        </div>

        <div
          className="flex h-[calc(100vh_-_14rem)] flex-col justify-between lg:h-full lg:w-3/4"
          //style={{ border: "2px solid purple" }}
        >
          <div
            className="relative -top-12 rounded bg-white px-4 py-8 shadow lg:static lg:h-full lg:p-0 lg:shadow-none dark:bg-gray-800"
            //style={{ border: "2px solid orange" }}
          >
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
            <div
              className="mb-4 flex justify-between lg:h-20  text-orange-500 font-bold"
              //style={{ border: "2px solid yellow" }}
            >
              {!isFirstStep && (
                <button type="button" onClick={prev}>
                  Voltar
                </button>
              )}
              {isLastStep ? (
                <div></div>
              ) : (
                <button
                  type="submit"
                  className="ml-auto rounded bg-teal-800 px-4 py-0 font-semibold text-blue-50 shadow"
                  onClick={(e: any) => handlePost(submitBody)}
                >
                  Avançar
                </button>
              )}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

/*const StepFormOk = App;

export default StepFormOk;*/

{
  /*<button
                  type="submit"
                  className="ml-auto rounded bg-green-500 px-4 py-2 font-semibold text-gray-50 shadow"
                  onClick={() => handleWppRedirect()}
                >
                  Confirmar
              </button>*/
}
