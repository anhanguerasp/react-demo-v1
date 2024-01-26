import { InscrevaseSection } from "../../../components/institucional";
import { Catalog } from "../../../components/layout/catalog/catalog";
import { Footer } from "../../../components/layout/footer/footer";
import { Formulary } from "../../../components/layout/formularies/basic/formularie";
import { Navbar } from "../../../components/layout/navbar/Navbar";

const Page = () => {
  return (
    <div>
      <Navbar />
      <InscrevaseSection />
      <Catalog />
      <Formulary partner="" />
      <Footer />
    </div>
  );
};
export default Page;
