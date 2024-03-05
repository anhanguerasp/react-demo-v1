import { createContext, useContext } from 'react';
import { ProductData } from '../../components/ProductList/types';
import { CourseData } from '../../components/CourseList/types';
// Import your data fetching function

export interface CourseContextProps {
  courses: CourseData[] | undefined;
  modalities: string[] | undefined;
  categories: string[] | undefined;
  isLoadingCourses: boolean;
  isErrorCourses: boolean;
  isLoadingCategories: boolean;
  isErrorCategories: boolean;
  refetchCategories: () => void;
  refetchCourses: () => void;
}

export const CourseContext = createContext<CourseContextProps | undefined>(
  undefined
);

export const useCourseContext = (): CourseContextProps => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error(
      'useCourseContext must be used within a ProductContextProvider'
    );
  }
  return context;
};
