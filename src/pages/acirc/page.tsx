import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Footer } from "../../components/layout/footer/footer";
import { AcircFormulary } from "../../components/layout/formularies/acirc/acircformulario";
import { Formulary } from "../../components/layout/formularies/basic/formularie";
import { Navbar } from "../../components/layout/navbar/Navbar";
import { AcircSection } from "../../components/layout/parcerias/ACIRC/AcircSection";
import { ValePixSection } from "../../components/layout/parcerias/amigoValePix/valepixSection";

const Page = () => {
  return (
    <div>
      <Navbar />
      <CarouselList />
      <AcircSection />
      <Catalog />
      <AcircFormulary partner="Acirc" />
      <Footer />
    </div>
  );
};

export default Page;
