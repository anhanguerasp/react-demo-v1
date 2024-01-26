import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Footer } from "../../components/layout/footer/footer";
import { Formulary } from "../../components/layout/formularies/basic/formularie";
import { HomeContent } from "../../components/layout/home/homeContent";
import { Navbar } from "../../components/layout/navbar/Navbar";
import { homeCarrouselList } from "../../utils/listas/carrouselLits";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CarouselList imageList={homeCarrouselList} />
      <HomeContent />
      <Catalog />
      <Formulary partner="" />
      <Footer />
    </div>
  );
};

export default HomePage;
