import { createBrowserRouter } from "react-router-dom";
import { ValePixSection } from "../components/layout/parcerias/amigoValePix/valepixSection";
import {
  AmaiPage,
  AportPage,
  ArcicPage,
  DominosPage,
  GraduacaoPage,
  HomePage,
  PoliticaPage,
  PosGraduacaoPage,
  ProfValePixPage,
  TermosPage,
  UnegroPage,
  UnidadesPage,
  ValepixPage,
} from "../pages";

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
]);
