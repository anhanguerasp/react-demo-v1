import Switcher from "../../components/navbar/Switcher/Swircher";
import "./prenav-style.scss";
export const PreNavbar = () => {
  return (
    <div className="flex flex-wrap prenav">
      <Switcher />
    </div>
  );
};
