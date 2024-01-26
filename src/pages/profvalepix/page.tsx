import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Footer } from "../../components/layout/footer/footer";
import { ProfessorValePixFormulary } from "../../components/layout/formularies/professorValePix/professorValePix";
import { Navbar } from "../../components/layout/navbar/Navbar";
import { ProfessorValePixSection } from "../../components/layout/parcerias/professorValePix/professorValePixSection";
import { profValePixCarouselList } from "../../utils/listas/carrouselLits";

const Page = () => {
  return (
    <div>
      <Navbar />
      <CarouselList imageList={profValePixCarouselList} />
      <ProfessorValePixSection />
      <Catalog />
      <ProfessorValePixFormulary partner="Professor Vale Pix" />
      <Footer />
    </div>
  );
};

export default Page;
