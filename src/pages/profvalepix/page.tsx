import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Colaborators } from "../../components/layout/colaborators/colaborators";
import { Footer } from "../../components/layout/footer/footer";
import { Formulary } from "../../components/layout/formularies/basic/formularie";
import { ProfessorValePixFormulary } from "../../components/layout/formularies/professorValePix/professorValePix";
import { Navbar } from "../../components/layout/navbar/Navbar";
import { ValePixSection } from "../../components/layout/parcerias/amigoValePix/valepixSection";
import { ProfessorValePixSection } from "../../components/layout/parcerias/professorValePix/professorValePixSection";

const Page = () => {
  return (
    <div>
      <Navbar />
      <CarouselList />
      <ProfessorValePixSection />
      <Catalog />
      <ProfessorValePixFormulary partner="Professor Vale Pix" />
      <Footer />
    </div>
  );
};

export default Page;
