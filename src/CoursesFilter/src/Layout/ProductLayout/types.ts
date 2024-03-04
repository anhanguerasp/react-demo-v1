export enum SortTypes {
  HIGH_TO_LOW_PRICE = 'Preço: Alto para Baixo',
  LOW_TO_HIGH_PRICE = 'Preço: Baixo para Alto',
  BEST_RATING = 'Popularidade',
  NONE = '',
}
import { ProductData } from '../../components/ProductList/types';

// }
export interface FilterTypes {
  productName: string;
  category: string[];
  priceRange: string;
  rating: string;
  sortBy: SortTypes;
  [key: string]: string | string[];
}
export interface FilterBarProps {}

export interface ProductLayoutProps {
  products: ProductData[];
  categories: string[];
}
