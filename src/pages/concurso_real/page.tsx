import { NewFooter } from "../../NOVO/layout/newFooter/newFooter";
import { NewNavbar } from "../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../NOVO/layout/newPreNav/preNav";
import { Landing } from "./layout/teste";

const Page = () => {
  return (
    <>
      <div
        className="flex flex-col transition duration-200 dark:bg-gray-900 p-10"
        style={{ position: "relative" }}
      >
        <PreNavbar />
        <NewNavbar />
      </div>
      <Landing />
      <NewFooter />
    </>
  );
};

export default Page;
