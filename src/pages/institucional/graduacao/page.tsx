import { GraduationSection } from "../../../components/institucional";
import { CarouselList } from "../../../components/layout/carousel/carouselList";
import { Catalog } from "../../../components/layout/catalog/catalog";
import { Footer } from "../../../components/layout/footer/footer";
import { Formulary } from "../../../components/layout/formularies/basic/formularie";
import { Navbar } from "../../../components/layout/navbar/Navbar";
import { graduacaoCarouselList } from "../../../utils/listas/carrouselLits";

const Page = () => {
  return (
    <div>
      <Navbar />
      <CarouselList imageList={graduacaoCarouselList} />
      <GraduationSection />
      <Catalog />
      <Formulary partner="" />
      <Footer />
    </div>
  );
};

export default Page;
