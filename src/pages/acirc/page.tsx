import { NewAcircForm } from "../../NOVO/components/forms/acirc/acirc-form";
import { FormularyContainer } from "../../NOVO/components/newFormularies/formularyContainer/formularyContainer";
import { NewFooter } from "../../NOVO/layout/newFooter/newFooter";
import { NewNavbar } from "../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../NOVO/layout/newPreNav/preNav";
import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { AcircSection } from "../../components/layout/parcerias/ACIRC/AcircSection";
import { acircCarouselList } from "../../utils/listas/carrouselLits";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col transition duration-200 dark:bg-gray-900 p-10">
        <PreNavbar />
        <NewNavbar />
      </div>
      <CarouselList imageList={acircCarouselList} />
      <AcircSection />
      <Catalog />
      <FormularyContainer children={<NewAcircForm partner="Acirc" />} />
      <NewFooter />
    </div>
  );
};

export default Page;