import { useRef } from "react";
import { NewFooter } from "../../NOVO/layout/newFooter/newFooter";
import { NewNavbar } from "../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../NOVO/layout/newPreNav/preNav";
import { Base } from "./layout/base";
import { FeaturesBlocks } from "./layout/features/features";
import Features from "./detailSection/detailSection";
import { FooterSubscribeSection } from "./footerSubscribeSection.tsx/footer-subscribe-section";
import { Faq } from "./layout/faq/faq";

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
      {/*<GeralList />*/}
      <Features />
      <FooterSubscribeSection />
      <Faq />
      <NewFooter />
    </>
  );
};

export default Page;
