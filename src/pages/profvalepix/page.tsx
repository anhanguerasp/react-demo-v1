import { NewFooter } from "../../NOVO/layout/newFooter/newFooter";
import { NewNavbar } from "../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../NOVO/layout/newPreNav/preNav";
import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { ProfessorValePixFormulary } from "../../components/layout/formularies/professorValePix/professorValePix";
import { ProfessorValePixSection } from "../../components/layout/parcerias/professorValePix/professorValePixSection";
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
      <ProfessorValePixFormulary partner="Professor Vale Pix" />
      <NewFooter />
    </div>
  );
};

export default Page;
