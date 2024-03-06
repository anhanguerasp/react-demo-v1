import { FilterTypes, SortTypes } from "../Layout/ProductLayout/types";
import { CourseData } from "../components/CourseList/types";
import { ProductData } from "../components/ProductList/types";

export const filterAndSortProducts = (
  products: CourseData[],
  filters: FilterTypes
): CourseData[] => {
  const filteredProducts = products.filter((product) => {
    // Check if product name contains the filter
    if (
      filters.productName &&
      !product.title.toLowerCase().includes(filters.productName.toLowerCase())
    ) {
      return false;
    }

    // Check if the product belongs to the selected categories
    if (
      filters.category.length > 0 &&
      !filters.category.includes(product.category)
    ) {
      return false;
    }

    // Check if the product belongs to the selected modality
    if (
      filters.modality.length > 0 &&
      !filters.modality.includes(product.modality)
    ) {
      return false;
    }

    // Check if the product's price is within the specified range
    if (
      filters.priceRange &&
      !isPriceInRange(product.price, filters.priceRange)
    ) {
      return false;
    }

    // Check if the product's rating matches the selected rating
    if (
      filters.rating &&
      customRound(product.popularity.rate) !== parseInt(filters.rating)
    ) {
      return false;
    }

    return true;
  });

  // Sorting based on sortBy criteria
  return sortProducts(filteredProducts, filters.sortBy);
};
const isPriceInRange = (price: number, range: string): boolean => {
  const min = 0;
  const max = parseInt(range);
  return !isNaN(0) && !isNaN(max) && price >= min && price <= max;
};

export function customRound(number: number) {
  const decimalPart = number - Math.floor(number);

  if (decimalPart >= 0.5) {
    return Math.ceil(number);
  } else {
    return Math.floor(number);
  }
}
const sortProducts = (
  products: CourseData[],
  sortBy: SortTypes
): CourseData[] => {
  switch (sortBy) {
    case SortTypes.HIGH_TO_LOW_PRICE:
      return products.slice().sort((a, b) => b.price - a.price);
    case SortTypes.LOW_TO_HIGH_PRICE:
      return products.slice().sort((a, b) => a.price - b.price);
    case SortTypes.BEST_RATING:
      return products
        .slice()
        .sort((a, b) => b.popularity.rate - a.popularity.rate);
    case SortTypes.NONE:
      return products;
    default:
      return products;
  }
};
