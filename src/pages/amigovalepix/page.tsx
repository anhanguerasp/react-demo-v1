import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Footer } from "../../components/layout/footer/footer";
import { AmigoValePixFormulary } from "../../components/layout/formularies/amigovalepix/amigoValePixFormulario";
import { Navbar } from "../../components/layout/navbar/Navbar";
import { ValePixSection } from "../../components/layout/parcerias/amigoValePix/valepixSection";
import { amigoValePixCarouselList } from "../../utils/listas/carrouselLits";

const Page = () => {
  return (
    <div>
      <Navbar />
      <CarouselList imageList={amigoValePixCarouselList} />
      <ValePixSection />
      <Catalog />
      <AmigoValePixFormulary partner="Amigo Vale pix" />
      <Footer />
    </div>
  );
};

export default Page;
