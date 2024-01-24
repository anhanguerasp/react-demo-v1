import { IUnidade } from "../../../models/generico/IUnidadeInfo";

export type props = {
  data: IUnidade;
};

export const UnidadeContent = ({ data }: props) => {
  return (
    <div key={data.unidade}>
      <h2>Unidade</h2>
      <h3>{data.unidade}</h3>
      <ul>
        {data.nucleos?.length ? (
          data.nucleos.map((item) => (
            <li>
              <h4>{item.titulo}</h4>
              <p>{item.endereco}</p>
              <p>
                <a href={`tel:+${item.telefone}`}>Tel: {item.telefone}</a>
              </p>
            </li>
          ))
        ) : (
          <li>
            <p>{data.endereco}</p>
            <p>
              <a href={`tel:+${data.telefone}`}>Tel: {data.telefone}</a>
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};
