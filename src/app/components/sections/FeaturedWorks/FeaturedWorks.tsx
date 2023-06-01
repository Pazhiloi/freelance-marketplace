import React, { FC } from "react";
import s from "./FeaturedWorks.module.scss";
import w from '../../shared/WorkItems.module.scss'
import { myWorks } from "../../../data/works";
import LoadMore from "../../ui/LoadMore/LoadMore";
import Work from "../../ui/Work/Work";
const FeaturedWorks: FC = () => {
  return (
    <section className={s.section}>
      <h1 className={`${s.title} main-title`}>
        <span>Вибрані</span> роботи
      </h1>
      <div className={w.items}>
        {myWorks.map(
          ({ id, title, price, img, userImg, name, rating, projects }) => (
            <Work
              key={id}
              id={id}
              title={title}
              price={price}
              img={img}
              userImg={userImg}
              name={name}
              rating={rating}
              projects={projects}
            />
          )
        )}
      </div>
      <LoadMore/>
    </section>
  );
};

export default FeaturedWorks;
