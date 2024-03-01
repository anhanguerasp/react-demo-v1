import "./style.scss";
import { useState } from "react";
import { BannerButton } from "./button/button";
import { StepFormOk } from "../../../../stepForms/src/App";

export const BannerHome = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="h-screen w-full lg:h-[34rem]">
      <div className="w-full h-full">
        <div
          className="back-img bg-home-mobile-banner md:bg-home-mobile-banner lg:bg-home-banner lg:gap-4 relative"
          //style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        >
          <div
            className="top-0 left-0 right-0 h-full w-full"
            style={{ margin: "auto" }}
          >
            <BannerButton content="Inscreva-se" onClick={handleShowModal} />
          </div>
        </div>
      </div>
      <StepFormOk show={showModal} handleClose={handleShowModal} />
    </section>
  );
};

{
  /*className="flex flex-wrap h-full
  w-full gap-2 bg-cover bg-no-repeat bg-center bg-home-mobile-banner md:bg-home-mobile-banner lg:bg-home-banner lg:gap-4 bg-cover lg:items-stretch lg:justify-stretch"*/
}
