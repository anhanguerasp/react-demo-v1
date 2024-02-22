import { ChatBox } from "../../BOT/chatbot/Chatbox";
import { NewProfessorValePix } from "../../NOVO/components/forms/professorValePix/professorValePix";
import { FormularyContainer } from "../../NOVO/components/newFormularies/formularyContainer/formularyContainer";
import { NewFooter } from "../../NOVO/layout/newFooter/newFooter";
import { NewNavbar } from "../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../NOVO/layout/newPreNav/preNav";
import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { ProfessorValePixSection } from "../../components/layout/parcerias/professorValePix/professorValePixSection";
import { WppIcon } from "../../components/layout/whatsapppIcon.tsx/wppIcon";
import { profValePixCarouselList } from "../../utils/listas/carrouselLits";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col transition duration-200 dark:bg-gray-900 p-10">
        <PreNavbar />
        <NewNavbar />
      </div>
      <CarouselList imageList={profValePixCarouselList} />
      <ProfessorValePixSection />
      <Catalog />
      {/*<ProfessorValePixFormulary partner="Professor Vale Pix" />*/}
      <FormularyContainer
        children={<NewProfessorValePix partner="Professor Vale Pix" />}
      />
      <NewFooter />
      <ChatBox />
      <WppIcon />
    </div>
  );
};

export default Page;
