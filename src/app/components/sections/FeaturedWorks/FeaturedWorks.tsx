import React, { FC } from "react";
import s from "./FeaturedWorks.module.scss";
import { myWorks } from "../../../data/works";
import FeatureWork from "../../ui/FeatureWork/FeatureWork";
import LoadMore from "../../ui/LoadMore/LoadMore";
const FeaturedWorks: FC = () => {
  return (
    <div className={s.section}>
      <h1 className={`${s.title} main-title`}>
        <span>Вибрані</span> роботи
      </h1>
      <div className={s.items}>
        {myWorks.map(
          ({ id, title, price, img, userImg, name, rating, projects }) => (
            <FeatureWork
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
    </div>
  );
};

export default FeaturedWorks;
