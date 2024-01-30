import { NewNavbar } from "../../NOVO/layout/newNav/navbar";
import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Footer } from "../../components/layout/footer/footer";
import { AcircFormulary } from "../../components/layout/formularies/acirc/acircformulario";
import { AcircSection } from "../../components/layout/parcerias/ACIRC/AcircSection";
import { acircCarouselList } from "../../utils/listas/carrouselLits";

const Page = () => {
  return (
    <div>
      <NewNavbar />
      <CarouselList imageList={acircCarouselList} />
      <AcircSection />
      <Catalog />
      <AcircFormulary partner="Acirc" />
      <Footer />
    </div>
  );
};

export default Page;
