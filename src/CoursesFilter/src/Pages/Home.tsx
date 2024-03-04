import CourseLayout from '../Layout/CourseLayout/CourseLayouts';
import ProductLayout from '../Layout/ProductLayout';
import Loader from '../components/Loader';
import ProductContextProvider from '../context/FilterContext';
import { useCourseHook } from '../hooks/useProductHook';
import ErrorPage from './Error';

const Home = () => {
  const { courses, categories, loading, error, handleReload } = useCourseHook();

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorPage onReload={handleReload} />;
  }
  if (courses && categories) {
    return (
      <ProductContextProvider>
        {/*<ProductLayout />*/}
        <CourseLayout />
      </ProductContextProvider>
    );
  }
};

export default Home;
