import { scrollDown } from "../../../../public/TS/script";

type props = {
  unidade: string;
  hadleSetUnidade: (e: string) => void;
};
export const ButtonUnidade = ({ unidade, hadleSetUnidade }: props) => {
  const handleClick = () => {
    scrollDown();
    hadleSetUnidade(unidade);
  };
  return (
    <li>
      <a onClick={handleClick} id={unidade} key={unidade}>
        {unidade}
      </a>
    </li>
  );
};
