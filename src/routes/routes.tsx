import { createBrowserRouter } from "react-router-dom";
import {
  AmaiPage,
  AportPage,
  ArcicPage,
  ConcursoPage,
  ConcursoRealPage,
  DominosPage,
  GraduacaoPage,
  HomePage,
  InfraPage,
  InscrevasePage,
  PoliticaPage,
  PosGraduacaoPage,
  ProfValePixPage,
  TermosPage,
  UnegroPage,
  UnidadesPage,
  ValepixPage,
} from "../pages";
import { UnegroAfiliados } from "../components/afiliados/unegro";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "/parcerias/amigovalepix",
    element: <ValepixPage />,
  },
  {
    path: "/parcerias/professorvalepix",
    element: <ProfValePixPage />,
  },
  {
    path: "/parcerias/dominos",
    element: <DominosPage />,
  },

  {
    path: "/parcerias/aport",
    element: <AportPage />,
  },

  {
    path: "/parcerias/acirc",
    element: <ArcicPage />,
  },
  {
    path: "/parcerias/amai",
    element: <AmaiPage />,
  },

  {
    path: "/parcerias/unegro",
    element: <UnegroPage />,
  },

  /// Institucioinal

  {
    path: "/institucional/graduacao",
    element: <GraduacaoPage />,
  },

  {
    path: "/institucional/posgraduacao",
    element: <PosGraduacaoPage />,
  },
  {
    path: "/institucional/unidades",
    element: <UnidadesPage />,
  },

  {
    path: "/institucional/termosdeuso",
    element: <TermosPage />,
  },
  {
    path: "/institucional/politica",
    element: <PoliticaPage />,
  },
  {
    path: "/institucional/infraestrutura",
    element: <InfraPage />,
  },
  {
    path: "/institucional/inscrevase",
    element: <InscrevasePage />,
  },

  /// AFILIADOS

  {
    path: "/afiliados/unegro",
    element: <UnegroAfiliados />,
  },

  //# cosultores pae
  {
    path: "/consultores",
    element: <ConcursoPage />,
  },

  // essa sim é do consurso
  {
    path: "/curso-preparatorio-para-concurso-publico-diretor-pmsp",
    element: <ConcursoRealPage />,
  },
]);
