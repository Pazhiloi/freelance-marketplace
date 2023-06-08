export interface IWork {
  id: number;
  title: string;
  price: number;
  img: string;
  userImg: string;
  name: string;
  rating: number;
  projects: number;
  isHistory?: boolean;
  status?: string;
  plan?: string;
  date?: string;
}
