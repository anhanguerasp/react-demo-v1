import { ChatBox } from "../../../BOT/chatbot/Chatbox";
import { NewFooter } from "../../../NOVO/layout/newFooter/newFooter";
import { NewNavbar } from "../../../NOVO/layout/newNav/navbar";
import { PreNavbar } from "../../../NOVO/layout/newPreNav/preNav";
import { TermosSection } from "../../../components/institucional";
import { WppIcon } from "../../../components/layout/whatsapppIcon.tsx/wppIcon";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col transition duration-200 dark:bg-gray-900 p-10">
        <PreNavbar />
        <NewNavbar />
      </div>
      <TermosSection />
      <NewFooter />
      <ChatBox />
      <WppIcon />
    </div>
  );
};
export default Page;
