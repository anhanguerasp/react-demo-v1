import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Colaborators } from "../../components/layout/colaborators/colaborators";
import { Footer } from "../../components/layout/footer/footer";
import { Formulary } from "../../components/layout/formularies/basic/formularie";
import { Navbar } from "../../components/layout/navbar/Navbar";
import { AmaiSection } from "../../components/layout/parcerias/amai/amaiSection";
import { ValePixSection } from "../../components/layout/parcerias/amigoValePix/valepixSection";

const Page = () => {
  return (
    <div>
      <Navbar />
      <CarouselList />
      <AmaiSection />
      <Catalog />
      <Formulary />
      <Footer />
    </div>
  );
};

export default Page;
