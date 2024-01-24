import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Colaborators } from "../../components/layout/colaborators/colaborators";
import { Footer } from "../../components/layout/footer/footer";
import { Formulary } from "../../components/layout/formularies/basic/formularie";
import { Navbar } from "../../components/layout/navbar/Navbar";
import { AportSection } from "../../components/layout/parcerias/aport/aportSection";

const Page = () => {
  return (
    <div>
      <Navbar />
      <CarouselList />
      <AportSection />
      <Catalog />
      <Formulary partner="Aport" />
      <Footer />
    </div>
  );
};

export default Page;
