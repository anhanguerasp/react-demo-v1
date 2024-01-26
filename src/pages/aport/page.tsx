import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Footer } from "../../components/layout/footer/footer";
import { Formulary } from "../../components/layout/formularies/basic/formularie";
import { Navbar } from "../../components/layout/navbar/Navbar";
import { AportSection } from "../../components/layout/parcerias/aport/aportSection";
import { aportCarouselList } from "../../utils/listas/carrouselLits";

const Page = () => {
  return (
    <div>
      <Navbar />
      <CarouselList imageList={aportCarouselList} />
      <AportSection />
      <Catalog />
      <Formulary partner="Aport" />
      <Footer />
    </div>
  );
};

export default Page;
