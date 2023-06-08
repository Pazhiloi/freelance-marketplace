export interface IInner{
  id?: number;
  title: string; 
}
export interface IItem {
  item: {
    id: number;
    title: string;
    inner: IInner[];
  };
}
export interface IFollowImage {
  desc: string;
  img: string;
}