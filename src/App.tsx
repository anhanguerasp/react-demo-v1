import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import "flowbite";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//  (11) 9 9255-5389
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
