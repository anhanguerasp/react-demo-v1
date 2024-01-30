import { NewFooter } from "../../NOVO/layout/newFooter/newFooter";
import { NewNavbar } from "../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../NOVO/layout/newPreNav/preNav";
import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { AmigoValePixFormulary } from "../../components/layout/formularies/amigovalepix/amigoValePixFormulario";
import { ValePixSection } from "../../components/layout/parcerias/amigoValePix/valepixSection";
import { amigoValePixCarouselList } from "../../utils/listas/carrouselLits";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col transition duration-200 dark:bg-gray-900 p-10">
        <PreNavbar />
        <NewNavbar />
      </div>
      <CarouselList imageList={amigoValePixCarouselList} />
      <ValePixSection />
      <Catalog />
      <AmigoValePixFormulary partner="Amigo Vale pix" />
      <NewFooter />
    </div>
  );
};

export default Page;
