import { NewFooter } from "../../../NOVO/layout/newFooter/newFooter";
import { NewNavbar } from "../../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../../NOVO/layout/newPreNav/preNav";
import { GraduationSection } from "../../../components/institucional";
import { CarouselList } from "../../../components/layout/carousel/carouselList";
import { Catalog } from "../../../components/layout/catalog/catalog";
import { Formulary } from "../../../components/layout/formularies/basic/formularie";
import { graduacaoCarouselList } from "../../../utils/listas/carrouselLits";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col transition duration-200 dark:bg-gray-900 p-10">
        <PreNavbar />
        <NewNavbar />
      </div>
      <CarouselList imageList={graduacaoCarouselList} />
      <GraduationSection />
      <Catalog />
      <Formulary partner="" />
      <NewFooter />
    </div>
  );
};

export default Page;
