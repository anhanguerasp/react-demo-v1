import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/homePage/home";

const routes = createBrowserRouter([
  {
    path: "",
    element: <HomePage />,
  },
]);

export const Router = () => {
  return <RouterProvider router={routes} />;
};
