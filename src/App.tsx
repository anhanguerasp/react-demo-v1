import "./App.css";
import { RouterProvider, useLocation } from "react-router-dom";
import { routes } from "./routes/routes";
import "flowbite";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";

//  (11) 9 9255-5389
function App() {
  const ScrollToTop = (props: any) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>;
  };
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
