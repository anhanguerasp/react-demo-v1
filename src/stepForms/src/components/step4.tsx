import { useEffect } from "react";
import checkedIcon from "../assets/images/icon-thank-you.svg";

interface props {
  name?: string;
}

export const Step4 = ({ name }: props) => {
  useEffect(() => {
    setTimeout(() => {
      window.open(
        `https://wa.me/5511969510032/?text="Olá, gostaria de conversar com algum dos seus atendentes"`
      );
    }, 3600);
  }, []);

  return (
    <div
      className="text-center flex lg:flex lg:h-90 flex-col lg:justify-center align-center"
      style={{ alignItems: "center" }}
    >
      <img className="mx-auto mb-2 h-12 w-12" src={checkedIcon} alt="" />
      {/*<svg
        className="mx-auto stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 "
        viewBox="0 0 24 24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
  </svg>*/}

      <h3 className="text-2xl font-bold text-orange-500">Obrigado!</h3>
      <p className="mt-4 text-base text-gray-500">
        Obrigado pela sua Inscrição. Por favor, aguarde alguns segundos enquanto
        nós te redirecionamos para o nosso{" "}
        <span className="text-green-500 font-semibold">WhatsApp!</span>
      </p>
    </div>
  );
};
