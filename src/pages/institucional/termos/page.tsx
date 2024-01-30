import { NewFooter } from "../../../NOVO/layout/newFooter/newFooter";
import { NewNavbar } from "../../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../../NOVO/layout/newPreNav/preNav";
import { TermosSection } from "../../../components/institucional";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col transition duration-200 dark:bg-gray-900 p-10">
        <PreNavbar />
        <NewNavbar />
      </div>
      <TermosSection />
      <NewFooter />
    </div>
  );
};
export default Page;
