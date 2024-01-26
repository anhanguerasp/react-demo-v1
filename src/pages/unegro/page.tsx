import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Footer } from "../../components/layout/footer/footer";
import { Formulary } from "../../components/layout/formularies/basic/formularie";
import { Navbar } from "../../components/layout/navbar/Navbar";
import { UnegroSection } from "../../components/layout/parcerias/unegro/unegroSection";
import { unegroCarouselList } from "../../utils/listas/carrouselLits";

const Page = () => {
  return (
    <div>
      <Navbar />
      <CarouselList imageList={unegroCarouselList} />
      <UnegroSection />
      <Catalog />
      <Formulary partner="Unegro" />
      <Footer />
    </div>
  );
};

export default Page;
