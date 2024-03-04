import { CourseData } from './types';

export const FilterPageCourseList: CourseData[] = [
  {
    id: 1,
    title: 'Administração',
    description: 'Descrção Genérica',
    image: '',
    category: 'Gestão',
    modality: 'Presencial',
    type: 'Bacharelado',
    semesters: 8,
    price: 280,
    popularity: {
      rate: 3,
      count: 2,
    },
  },

  {
    id: 2,
    title: 'Artes visuais',
    description: 'Descrção Genérica',
    image: '',
    category: 'Artes e Design',
    modality: 'Presencial',
    semesters: 8,
    type: 'Bacharelado',
    price: 100,
    popularity: {
      rate: 3,
      count: 2,
    },
  },

  {
    id: 3,
    title: 'Ciências Contábeis',
    description: 'Descrção Genérica',
    image: '',
    category: 'Ciências, Exatas e Tecnologia',
    semesters: 8,
    modality: 'Presencial',
    type: 'Bacharelado',
    price: 100,
    popularity: {
      rate: 3,
      count: 2,
    },
  },

  {
    id: 4,
    title: 'Teste',
    description: 'Descrção Genérica',
    image: '',
    category: 'Artes e Design',
    modality: 'Presencial',
    semesters: 8,
    type: 'Bacharelado',
    price: 500,
    popularity: {
      rate: 4,
      count: 2,
    },
  },
];
