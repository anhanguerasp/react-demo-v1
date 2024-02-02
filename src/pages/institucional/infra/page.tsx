import { NewGenericForm } from "../../../NOVO/components/forms/generic/generic-form";
import { FormularyContainer } from "../../../NOVO/components/newFormularies/formularyContainer/formularyContainer";
import { NewFooter } from "../../../NOVO/layout/newFooter/newFooter";
import { NewNavbar } from "../../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../../NOVO/layout/newPreNav/preNav";
import { InfraSection } from "../../../components/institucional";
import { CarouselList } from "../../../components/layout/carousel/carouselList";
import { Catalog } from "../../../components/layout/catalog/catalog";
import { infraCarouselList } from "../../../utils/listas/carrouselLits";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col transition duration-200 dark:bg-gray-900 p-10">
        <PreNavbar />
        <NewNavbar />
      </div>
      <CarouselList imageList={infraCarouselList} />
      <InfraSection />
      <Catalog />
      <FormularyContainer children={<NewGenericForm partner="" />} />
      <NewFooter />
    </div>
  );
};
export default Page;
