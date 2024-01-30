import { NewFooter } from "../../../NOVO/layout/newFooter/newFooter";
import { NewNavbar } from "../../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../../NOVO/layout/newPreNav/preNav";
import { InscrevaseSection } from "../../../components/institucional";
import { Catalog } from "../../../components/layout/catalog/catalog";
import { Formulary } from "../../../components/layout/formularies/basic/formularie";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col transition duration-200 dark:bg-gray-900 p-10">
        <PreNavbar />
        <NewNavbar />
      </div>
      <InscrevaseSection />
      <Catalog />
      <Formulary partner="" />
      <NewFooter />
    </div>
  );
};
export default Page;
