import React, { FC, ReactNode, useEffect, useState } from 'react';
import s from "./Reviews.module.scss";
import { myReviews } from '../../../data/works';
import Review from '../../ui/Review/Review';
import LoadMore from '../../ui/LoadMore/LoadMore';
import { useLocation } from 'react-router-dom';
interface ISection{
  children: ReactNode
}
const Reviews: FC = () => {
  const [isChecked, setIsChecked] = useState('pos');
  const [isWork, setIsWork] = useState(true)
  const {pathname} = useLocation()

  useEffect(() => {
   if (pathname === '/work') {
     setIsWork(true);
   }else{
    setIsWork(false)
   }
  }, [pathname])

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
          className={isChecked === "pos" ? `${s.tab} ${s.green}` : `${s.tab}`}
        >
          Позитивні
        </div>
        <div
          className={isChecked === "neg" ? `${s.tab} ${s.green}` : `${s.tab}`}
        >
          Негативні
        </div>
      </div>
      <div className={ !isWork ?`${s.items}` : `${s.blocks}`}>
        {myReviews.map(({ id, name, rating, img, text }) => (
          <Review  key={id} name={name} rating={rating} img={img} text={text} />
        ))}
      </div>
      <LoadMore/>
    </SectionWrapper>
  );
};

export default Reviews;