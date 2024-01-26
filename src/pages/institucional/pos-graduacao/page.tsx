import { PosGraduationSection } from "../../../components/institucional";
import { CarouselList } from "../../../components/layout/carousel/carouselList";
import { Catalog } from "../../../components/layout/catalog/catalog";
import { Footer } from "../../../components/layout/footer/footer";
import { Formulary } from "../../../components/layout/formularies/basic/formularie";
import { Navbar } from "../../../components/layout/navbar/Navbar";
import { posgraduacaoCarouselList } from "../../../utils/listas/carrouselLits";

const Page = () => {
  return (
    <div>
      <Navbar />
      <CarouselList imageList={posgraduacaoCarouselList} />
      <PosGraduationSection />
      <Catalog />
      <Formulary partner="" />
      <Footer />
    </div>
  );
};
export default Page;
