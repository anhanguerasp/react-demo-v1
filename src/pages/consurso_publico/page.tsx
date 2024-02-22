import { useRef } from "react";
import { NewFooter } from "../../NOVO/layout/newFooter/newFooter";
import { NewNavbar } from "../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../NOVO/layout/newPreNav/preNav";
import { Base } from "./layout/base";
import { FeaturesBlocks } from "./layout/features/features";
import { TesteModal } from "../../NOVO/layout/flootingFormulary/button/teste";

const Page = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className="flex flex-col transition duration-200 dark:bg-gray-900 p-10"
        style={{ position: "relative" }}
      >
        <PreNavbar />
        <NewNavbar />
      </div>
      <Base onClick={handleScroll} />
      <FeaturesBlocks ref={ref} />
      <NewFooter />
    </>
  );
};

export default Page;
