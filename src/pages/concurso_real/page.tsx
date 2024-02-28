import { useRef } from "react";
import { NewFooter } from "../../NOVO/layout/newFooter/newFooter";
import { NewNavbar } from "../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../NOVO/layout/newPreNav/preNav";
import { CursoNav } from "./formulary/cursoNav";
import { Landing } from "./layout/teste";
import { ContactsCurso } from "./layout/contatos";

const Page = () => {
  const reContacts = useRef<HTMLDivElement>(null);

  const handleContact = () => {
    reContacts.current?.scrollIntoView({ behavior: "smooth" });
  };

  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/*<div
        className="flex flex-col transition duration-200 dark:bg-gray-900 p-10"
        style={{ position: "relative" }}
  >
        <PreNavbar />
        <NewNavbar />
  </div>*/}
      <CursoNav onClick={handleScroll} scrollContacts={handleContact} />
      <Landing ref={ref} />
      <ContactsCurso ref={reContacts} />

      {/*<NewFooter />*/}
    </>
  );
};

export default Page;
