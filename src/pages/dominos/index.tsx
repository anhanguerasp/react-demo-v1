import { NewNavbar } from "../../NOVO/layout/newNav/navbar";
import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Colaborators } from "../../components/layout/colaborators/colaborators";
import { DominoSection } from "../../components/layout/dominosSection/dominos";
import { Footer } from "../../components/layout/footer/footer";
import { Formulary } from "../../components/layout/formularies/basic/formularie";
import { dominosCarouselList } from "../../utils/listas/carrouselLits";
import styles from "./index.module.scss";

const IndexPage = () => {
  return (
    <div className={styles.index}>
      <NewNavbar />
      <CarouselList imageList={dominosCarouselList} />
      <DominoSection />
      <Colaborators />
      <Catalog />
      <Formulary partner={"Domino's"} />
      <Footer />
    </div>
  );
};

export default IndexPage;
