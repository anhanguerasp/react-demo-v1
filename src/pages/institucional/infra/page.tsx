import {
  GraduationSection,
  InfraSection,
  PoliticaSection,
  PosGraduationSection,
} from "../../../components/institucional";
import { CarouselList } from "../../../components/layout/carousel/carouselList";
import { Catalog } from "../../../components/layout/catalog/catalog";
import { Colaborators } from "../../../components/layout/colaborators/colaborators";
import { Footer } from "../../../components/layout/footer/footer";
import { Formulary } from "../../../components/layout/formularies/basic/formularie";
import { Navbar } from "../../../components/layout/navbar/Navbar";

const Page = () => {
  return (
    <div>
      <Navbar />
      <CarouselList />
      <InfraSection />
      <Catalog />
      <Formulary />
      <Footer />
    </div>
  );
};
export default Page;
