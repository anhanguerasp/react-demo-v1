import { NewNavbar } from "../../NOVO/layout/newNav/navbar";
import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Footer } from "../../components/layout/footer/footer";
import { Formulary } from "../../components/layout/formularies/basic/formularie";
import { AportSection } from "../../components/layout/parcerias/aport/aportSection";
import { aportCarouselList } from "../../utils/listas/carrouselLits";

const Page = () => {
  return (
    <div>
      <NewNavbar />
      <CarouselList imageList={aportCarouselList} />
      <AportSection />
      <Catalog />
      <Formulary partner="Aport" />
      <Footer />
    </div>
  );
};

export default Page;
