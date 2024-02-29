import { useState } from "react";
import { StepFormOk } from "../../../stepForms/src/App";
import Switcher from "../../components/switcher/Switcher";
import { NavButtons, NavSubscribeBtn } from "./layout";

export const PreNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div
      className="flex flex-wrap prenav justify-center"
      //style={{ border: "2px  solid red" }}
    >
      <StepFormOk show={showModal} handleClose={handleShowModal} />
      <div
        className="flex flex-wrap align-center justify-between content-center w-5/6 absolute top-0 px-5 border-b-2 
        border-gray-200 dark:border-gray-700 border-opacity-75 py-2 lg:pl-8"
        style={{ /*border: "2px solid green",*/ alignItems: "center" }}
      >
        <Switcher />
        <NavButtons handleOnClick={handleShowModal} />
      </div>
      {/*<Switcher />*/}
    </div>
  );
};
