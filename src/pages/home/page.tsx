import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Footer } from "../../components/layout/footer/footer";
import { Formulary } from "../../components/layout/formularies/basic/formularie";
import { HomeContent } from "../../components/layout/home/homeContent";
import { Navbar } from "../../components/layout/navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CarouselList />
      <HomeContent />
      <Catalog />
      <Formulary />
      <Footer />
    </div>
  );
};

export default HomePage;
