import { useQuery } from "@tanstack/react-query";
import { ProductData } from "../../components/ProductList/types";
import { mainURl } from "../../constants/url";
import { CourseContext, CourseContextProps } from "./ApiContext";
import { CourseData } from "../../components/CourseList/types";
import {
  FilterPageCourseList,
  FilterPageSecList,
} from "../../components/CourseList/list";
export const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data;
};

// Tem API? não tem !!, então o jeito é fazer local uê
export const fetchCourseData = () => {
  return FilterPageSecList; //FilterPageCourseList;
};

export const CourseContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const {
    data: courses,
    isLoading: isLoadingCourses,
    isError: isErrorCourses,
    refetch: refetchCourses,
  } = useQuery<CourseData[], Error>({
    queryKey: ["courses"],
    queryFn: () => fetchCourseData(), //fetchData(mainURl + 'courses'),
  });

  const {
    data: categories,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
    refetch: refetchCategories,
  } = useQuery<string[], Error>({
    queryKey: ["categories"],
    queryFn: () => fetchData(mainURl + "products/categories"),
  });

  const value: CourseContextProps = {
    courses,

    categories,
    isLoadingCourses,
    isErrorCourses,
    isLoadingCategories,
    isErrorCategories,
    refetchCategories,
    refetchCourses,
  };

  //   useEffect(() => {
  //     // Additional logic after fetching initial data
  //   }, [products, categories]);

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
};
