import { CoursesTabContainer } from "../../components";
import { ChatBox } from "../../components/chatbot/Chatbox";
import { GenericForm } from "../../components/forms/Generic/generic-form";
import { Formulariecontainer } from "../../components/forms/formulariesContainer.tsx/formularieContainer";
import Switcher from "../../components/navbar/Switcher/Swircher";
import { Filter } from "../../layout/filter/filter";
import { Footer } from "../../layout/footer/footer";
import { Navbar } from "../../layout/navbar/navbar";
import { PreNavbar } from "../../layout/prenavbar/prenavbar";

export const HomePage = () => {
  return (
    <div className="min-h-screen transition duration-200 dark:bg-gray-900 p-10">
      <PreNavbar />
      <Navbar />
      {/*<Formulariecontainer />
      <ChatBox />
  <CoursesTabContainer />*/}
      <Filter />
      <Footer />
    </div>
  );
};
