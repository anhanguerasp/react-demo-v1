import { ChatBox } from "../../BOT/chatbot/Chatbox";
import { NewGenericForm } from "../../NOVO/components/forms/generic/generic-form";
import { FormularyContainer } from "../../NOVO/components/newFormularies/formularyContainer/formularyContainer";
import { NewFooter } from "../../NOVO/layout/newFooter/newFooter";
import { NewNavbar } from "../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../NOVO/layout/newPreNav/preNav";
import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Colaborators } from "../../components/layout/colaborators/colaborators";
import { DominoSection } from "../../components/layout/dominosSection/dominos";
import { dominosCarouselList } from "../../utils/listas/carrouselLits";
import styles from "./index.module.scss";

const IndexPage = () => {
  return (
    <div className={styles.index}>
      <div className="flex flex-col transition duration-200 dark:bg-gray-900 p-10">
        <PreNavbar />
        <NewNavbar />
      </div>
      <CarouselList imageList={dominosCarouselList} />
      <DominoSection />
      <Colaborators />
      <Catalog />
      <FormularyContainer children={<NewGenericForm partner="Domino's" />} />
      <NewFooter />
      <ChatBox />
    </div>
  );
};

export default IndexPage;
