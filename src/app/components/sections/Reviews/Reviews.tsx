import React, { FC, ReactNode} from 'react';
import s from "./Reviews.module.scss";
import { myReviews } from '../../../data/works';
import Review from '../../ui/Review/Review';
import LoadMore from '../../ui/LoadMore/LoadMore';
import { useReviews } from './useReviews';
interface ISection{
  children: ReactNode
}
const Reviews: FC = () => {
  const { positiveClassName, negativeClassName, itemsClassName, isWork } =
    useReviews(s);

  const SectionWrapper:FC<ISection> = ({children}) => {
    if (isWork) {
      return <div className={s.section}>{children}</div>;
    }else{
      return <section className={s.section}>{children}</section>
    }
  };

   
  
  return (
    <SectionWrapper>
      <h2 className={`title ${s.title}`}>Відгуки</h2>
      <div className={s.tabs}>
        <div
          className={positiveClassName}
        >
          Позитивні
        </div>
        <div
          className={negativeClassName}
        >
          Негативні
        </div>
      </div>
      <div className={itemsClassName}>
        {myReviews.map(({ id, name, rating, img, text }) => (
          <Review  key={id} name={name} rating={rating} img={img} text={text} />
        ))}
      </div>
      <LoadMore/>
    </SectionWrapper>
  );
};

export default Reviews;