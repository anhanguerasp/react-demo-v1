import StarRating from '../components/StarRating';
import Range from '../components/Range';

export const sortOptions = [
  { name: 'Popularidade', href: '#', current: false },
  { name: 'Preço: Baixo para Alto', href: '#', current: false, text: 'Preço:' },
  { name: 'Preço: Alto para Baixo', href: '#', current: false },
];

export const filterOptions = [
  {
    id: 'priceRange',
    name: 'Intervalo de Preço',
    Component: Range,
  },
  {
    id: 'rating',
    name: 'Popularidade',
    Component: StarRating,
  },
];
