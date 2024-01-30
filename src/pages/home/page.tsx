import { NewFooter } from "../../NOVO/layout/newFooter/newFooter";
import { NewNavbar } from "../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../NOVO/layout/newPreNav/preNav";
import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Formulary } from "../../components/layout/formularies/basic/formularie";
import { HomeContent } from "../../components/layout/home/homeContent";
import { homeCarrouselList } from "../../utils/listas/carrouselLits";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col transition duration-200 dark:bg-gray-900 p-10">
        <PreNavbar />
        <NewNavbar />
      </div>
      <CarouselList imageList={homeCarrouselList} />
      <HomeContent />
      <Catalog />
      <Formulary partner="" />
      <NewFooter />
    </div>
  );
};

export default HomePage;
