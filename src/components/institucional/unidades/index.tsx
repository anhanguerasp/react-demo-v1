import "./index-style.scss";
import { unidadesLista } from "../../../utils/listas/unidades";
import { ButtonUnidade } from "../../reuseable/buttonUnidade/buttonUnidade";
import { useState } from "react";
import { UnidadeContent } from "../../reuseable/unidadeContent/unidadeContent";

export const Index = () => {
  const [unidade, setUnidade] = useState("Araraquara");

  const unidadesFiltro = unidadesLista.filter(
    (item) => item.unidade === unidade
  );

  console.log(unidadesFiltro[0]);
  console.log(unidade);
  const handleSetUnidade = (unidade: string) => {
    setUnidade(unidade);
  };

  return (
    <main>
      <div className="titulo-unidades">
        <div className="titulo-unidades container-unidades">
          <p>São 16 unidades dentro do grupo anhanguera Sp! </p>
          <h1>Conheça nossas unidades!</h1>
        </div>
      </div>
      <div className="container-opcoes">
        <ul className="tabs">
          {unidadesLista.map((unidade) => (
            <ButtonUnidade
              unidade={unidade.unidade}
              hadleSetUnidade={handleSetUnidade}
            />
          ))}
        </ul>

        <div id="descricao-unidade" className="unidades-descricao-container">
          <ul>
            <UnidadeContent data={unidadesFiltro[0]} />
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Index;
