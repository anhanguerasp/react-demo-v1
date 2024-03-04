import { useMemo } from 'react';
import Filters from '../../components/Filters';
import ProductList from '../../components/ProductList';
import { filterAndSortProducts } from '../../helpers/FilterHelper';
import { useFilterContext } from '../../context/FilterContext/FilterContext';
import { useCourseHook } from '../../hooks/useProductHook';
import { ProductData } from '../../components/ProductList/types';
import CourseList from '../../components/CourseList';
import { FilterPageCourseList } from '../../components/CourseList/list';
import { CourseData } from '../../components/CourseList/types';

const CourseLayout = () => {
  const { courses } = useCourseHook();
  const { filters } = useFilterContext();

  const filteredAndSortedProducts = useMemo(
    () => filterAndSortProducts(courses as CourseData[], filters),
    [courses, filters]
  );

  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl">
      <Filters>
        {/*<ProductList products={filteredAndSortedProducts} />*/}
        <CourseList courses={filteredAndSortedProducts} />
      </Filters>
    </div>
  );
};

export default CourseLayout;
