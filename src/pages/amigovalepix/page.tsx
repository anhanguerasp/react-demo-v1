import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Colaborators } from "../../components/layout/colaborators/colaborators";
import { Footer } from "../../components/layout/footer/footer";
import { AmigoValePixFormulary } from "../../components/layout/formularies/amigovalepix/amigoValePixFormulario";
import { Formulary } from "../../components/layout/formularies/basic/formularie";
import { Navbar } from "../../components/layout/navbar/Navbar";
import { ValePixSection } from "../../components/layout/parcerias/amigoValePix/valepixSection";

const Page = () => {
  return (
    <div>
      <Navbar />
      <CarouselList />
      <ValePixSection />
      <Catalog />
      <AmigoValePixFormulary partner="Amigo Vale pix" />
      <Footer />
    </div>
  );
};

export default Page;
