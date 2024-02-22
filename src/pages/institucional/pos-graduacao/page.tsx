import { ChatBox } from "../../../BOT/chatbot/Chatbox";
import { NewGenericForm } from "../../../NOVO/components/forms/generic/generic-form";
import { FormularyContainer } from "../../../NOVO/components/newFormularies/formularyContainer/formularyContainer";
import { NewFooter } from "../../../NOVO/layout/newFooter/newFooter";
import { NewNavbar } from "../../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../../NOVO/layout/newPreNav/preNav";
import { PosGraduationSection } from "../../../components/institucional";
import { CarouselList } from "../../../components/layout/carousel/carouselList";
import { PosCatalog } from "../../../components/layout/catalog/catalog";
import { WppIcon } from "../../../components/layout/whatsapppIcon.tsx/wppIcon";
import { posgraduacaoCarouselList } from "../../../utils/listas/carrouselLits";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col transition duration-200 dark:bg-gray-900 p-10">
        <PreNavbar />
        <NewNavbar />
      </div>
      <CarouselList imageList={posgraduacaoCarouselList} />
      <PosGraduationSection />
      <PosCatalog />
      <FormularyContainer children={<NewGenericForm partner="" />} />
      <NewFooter />
      <ChatBox />
      <WppIcon />
    </div>
  );
};
export default Page;
