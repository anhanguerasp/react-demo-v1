import { useState } from "react";
import "./style.scss";

import { FooterButton } from "../../../NOVO/layout/flootingFormulary";

export const FooterSubscribeSection = () => {
  const [show, setShow] = useState(false);

  const handleOnClick = () => {
    setShow(!show);
  };

  return (
    <div
      className="flex w-full justify-center mt-9 mb-7 relative"
      style={{ height: "auto" }}
    >
      <div
        className="flex bg-gray-950 h-full w-5/6 px-7 rounded-lg py-7"
        style={{ flexDirection: "column" }}
      >
        <h4 className="text-orange-500 text-5xl font-semibold mb-2">
          Não perca está oportunidade!
        </h4>
        <p className="text-gray-200 w-3/6 mb-7 ">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore pariatur. Excepteur sint occaecat
        </p>
        <FooterButton show={show} onClick={handleOnClick} />
      </div>
      <div className="relative">
        <div
          className="triangle absolute left-1/6 transform -translate-x-1/2 bottom-0 pointer-events-none -z-5"
          area-hidden="true"
        ></div>
        <div
          className="small-triangle absolute left-1/2 transform -translate-x-1/6 bottom-0 pointer-events-none -z-5"
          area-hidden="true"
        ></div>
      </div>
    </div>
  );
};
