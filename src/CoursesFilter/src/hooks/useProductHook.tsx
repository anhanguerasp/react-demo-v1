import { useCourseContext } from "../context/ApiContext/ApiContext";

export const useCourseHook = () => {
  const {
    courses,
    modalities,
    categories,
    isLoadingCourses,
    isErrorCourses,
    isLoadingCategories,
    isErrorCategories,
    refetchCategories,
    refetchCourses,
  } = useCourseContext();

  const handleReload = () => {
    refetchCategories();
    refetchCourses();
  };
  return {
    loading: isLoadingCourses || isLoadingCategories,
    error: isErrorCategories || isErrorCourses,
    courses,
    modalities,
    categories,
    handleReload,
  };
};
