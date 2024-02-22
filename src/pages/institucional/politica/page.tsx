import { ChatBox } from "../../../BOT/chatbot/Chatbox";
import { NewGenericForm } from "../../../NOVO/components/forms/generic/generic-form";
import { FormularyContainer } from "../../../NOVO/components/newFormularies/formularyContainer/formularyContainer";
import { NewFooter } from "../../../NOVO/layout/newFooter/newFooter";
import { NewNavbar } from "../../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../../NOVO/layout/newPreNav/preNav";
import { WppIcon } from "../../../components/layout/whatsapppIcon.tsx/wppIcon";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col transition duration-200 dark:bg-gray-900 p-10">
        <PreNavbar />
        <NewNavbar />
      </div>
      <FormularyContainer children={<NewGenericForm partner="" />} />
      <NewFooter />
      <ChatBox />
      <WppIcon />
    </div>
  );
};
export default Page;
