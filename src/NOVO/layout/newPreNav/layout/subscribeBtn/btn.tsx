import { StepFormOk } from "../../../../../stepForms/src/App";

interface props {
  handleOnClick: () => void;
}
const Btn = ({ handleOnClick }: props) => {
  return (
    <div
      className="flex flex-wrap justify-center text-orange-500 rounded-lg p-2 font-semibold"
      style={{
        height: "auto",
        width: "auto",
        left: "100",
        textAlign: "center",
      }}
      onClick={handleOnClick}
    >
      Inscreva-se
    </div>
  );
};
export default Btn;
