import { Link } from "react-router-dom";

export const UnidadesLink = () => {
  return (
    <div style={{ wordWrap: "break-word" }}>
      <p className="mb-3">
        O Grupo AnhangueraSP possui diversas unidades espalhadas em São Paulo.
        Para mais informações acesse:
      </p>
      {""}
      <Link
        to={"https://anhanguerasp.com.br/institucional/unidades"}
        className=""
      >
        https://anhanguerasp.com.br/institucional/unidades
      </Link>{" "}
      <p className="mt-2">e entre em contato com a unidade que desejar.</p>
      {}
    </div>
  );
};
