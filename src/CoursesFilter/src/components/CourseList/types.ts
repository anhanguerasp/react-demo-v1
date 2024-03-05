export interface CourseData {
  id: number;
  title: string;
  description?: string;
  image?: string;
  category: string;
  modality: string;
  semesters: number;
  type: string;
  price: number;
  popularity: {
    rate: number;
    count: number;
  };
}
