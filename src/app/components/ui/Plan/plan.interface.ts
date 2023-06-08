export interface IOption {
  id: number;
  title: string;
  text: string;
  term: number;
  price: number;
}
export interface IPlan {
  id: number;
  title: string;
  desc: string;
  price: number;
  term: number;
  revisions: number;
  bottomTitle: string;
  options: IOption[];
}
