import { NewNavbar } from "../../NOVO/layout/newNav/navbar";
import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Footer } from "../../components/layout/footer/footer";
import { Formulary } from "../../components/layout/formularies/basic/formularie";
import { AmaiSection } from "../../components/layout/parcerias/amai/amaiSection";
import { amaiCarouselList } from "../../utils/listas/carrouselLits";

const Page = () => {
  return (
    <div>
      <NewNavbar />
      <CarouselList imageList={amaiCarouselList} />
      <AmaiSection />
      <Catalog />
      <Formulary partner="Amai" />
      <Footer />
    </div>
  );
};

export default Page;
