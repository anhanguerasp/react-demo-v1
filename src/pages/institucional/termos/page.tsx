import { NewNavbar } from "../../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../../NOVO/layout/newPreNav/preNav";
import { TermosSection } from "../../../components/institucional";
import { Footer } from "../../../components/layout/footer/footer";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col transition duration-200 dark:bg-gray-900 p-10">
        <PreNavbar />
        <NewNavbar />
      </div>
      <TermosSection />
      <Footer />
    </div>
  );
};
export default Page;
