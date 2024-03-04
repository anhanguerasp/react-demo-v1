import { useMemo } from 'react';
import Filters from '../../components/Filters';
import ProductList from '../../components/ProductList';
import { filterAndSortProducts } from '../../helpers/FilterHelper';
import { useFilterContext } from '../../context/FilterContext/FilterContext';
import { useCoursetHook } from '../../hooks/useProductHook';
import { ProductData } from '../../components/ProductList/types';
import { CourseData } from '../../components/CourseList/types';

const ProductLayout = () => {
  const { products } = useProductHook();
  const { filters } = useFilterContext();

  const filteredAndSortedProducts = useMemo(
    () => filterAndSortProducts(products as CourseData[], filters),
    [products, filters]
  );
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl">
      <Filters>
        <ProductList products={filteredAndSortedProducts} />
      </Filters>
    </div>
  );
};

export default ProductLayout;
