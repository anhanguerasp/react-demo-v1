import { NewFooter } from "../../NOVO/layout/newFooter/newFooter";
import { NewNavbar } from "../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../NOVO/layout/newPreNav/preNav";
import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Formulary } from "../../components/layout/formularies/basic/formularie";
import { UnegroSection } from "../../components/layout/parcerias/unegro/unegroSection";
import { unegroCarouselList } from "../../utils/listas/carrouselLits";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col transition duration-200 dark:bg-gray-900 p-10">
        <PreNavbar />
        <NewNavbar />
      </div>
      <CarouselList imageList={unegroCarouselList} />
      <UnegroSection />
      <Catalog />
      <Formulary partner="Unegro" />
      <NewFooter />
    </div>
  );
};

export default Page;
