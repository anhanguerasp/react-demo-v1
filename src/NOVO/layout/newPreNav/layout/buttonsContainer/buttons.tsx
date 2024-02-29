import { NavSubscribeBtn, NavWppBtn } from "..";

interface props {
  handleOnClick: () => void;
}

const Buttons = ({ handleOnClick }: props) => {
  return (
    <div
      className="flex flex-wrap justify-center"
      style={{ alignItems: "center" }}
    >
      <NavWppBtn />
      <NavSubscribeBtn handleOnClick={handleOnClick} />
    </div>
  );
};

export default Buttons;
