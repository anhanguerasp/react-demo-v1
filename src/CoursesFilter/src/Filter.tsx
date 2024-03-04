import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { CourseContextProvider } from "./context/ApiContext/ApiContextProvider";
import Loader from "./components/Loader";

const Home = lazy(() => import("./Pages/Home"));

const FilterPage: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CourseContextProvider>
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>
      </CourseContextProvider>
    </QueryClientProvider>
  );
};

export default FilterPage;
