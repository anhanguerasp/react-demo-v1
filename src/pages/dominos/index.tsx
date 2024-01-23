import { CarouselList } from "../../components/layout/carousel/carouselList";
import { Catalog } from "../../components/layout/catalog/catalog";
import { Colaborators } from "../../components/layout/colaborators/colaborators";
import { DominoSection } from "../../components/layout/dominosSection/dominos";
import { Footer } from "../../components/layout/footer/footer";
import { Formulary } from "../../components/layout/formularies/basic/formularie";
import { Navbar } from "../../components/layout/navbar/Navbar";
import styles from "./index.module.scss";

const IndexPage = () => {
  return (
    <div className={styles.index}>
      <Navbar />
      <CarouselList />
      <DominoSection />
      <Colaborators />
      <Catalog />
      <Formulary partner={"Domino's"} />
      <Footer />
    </div>
  );
};

export default IndexPage;
