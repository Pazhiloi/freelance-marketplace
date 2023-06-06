import React, { FC } from "react";
import s from "./Offers.module.scss";
import { myReviews } from "../../../data/works";
import Offer from "../../ui/Offer/Offer";
import Section from "../../ui/Section/Section";
const Offers: FC = () => {
  return (
    <Section>
      <div className={s.title}>Ставки фрілансерів</div>
      <div className={s.items}>
        {myReviews.map(
          ({ id, name, rating, img, text, price, improvements, workTerm }) => (
            <Offer
              key={id}
              id={id}
              name={name}
              rating={rating}
              img={img}
              text={text}
              price={price}
              improvements={improvements}
              workTerm={workTerm}
            />
          )
        )}
      </div>
    </Section>
  );
};

export default Offers;
