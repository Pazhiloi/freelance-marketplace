import React, { FC } from "react";
import s from "./Slider.module.scss";
import { useSlider } from "./useSlider";
import SliderBtn from "./SliderBtn/SliderBtn";
export interface ISlider {
  id: number;
  img: string;
}
const Slider: FC<{ items: ISlider[] }> = ({ items }) => {
  const {
    handleClick,
    handlePrev,
    handleNext,
    selectedImage,
    prevImage,
    isTransitioning,
    slideOffset,
  } = useSlider(items, s);

  return (
    <div className={s.slider}>
      <div className={s.imageWrapper}>
        {isTransitioning && (
          <img
            src={prevImage.img}
            alt="previous slide"
            className={`${s.bigImg} ${s.prevImg}`}
          />
        )}
        <img
          src={selectedImage.img}
          alt="current slide"
          className={`${s.bigImg} ${isTransitioning ? s.nextImg : ""}`}
        />
        <div onClick={handlePrev} className={s.prev}>
          <SliderBtn />
        </div>
        <div onClick={handleNext} className={s.next}>
          <SliderBtn />
        </div>
      </div>
        <div
          className={`${s.carousel}`}
          style={{ transform: `translateX(${slideOffset}px)` }}
        >
          {items.map((item) => (
            <img
              key={item.id}
              src={item.img}
              alt=""
              className={
                selectedImage === item ? `${s.img} ${s.active}` : `${s.img}`
              }
              onClick={() => handleClick(item)}
            />
          ))}
        </div>
    </div>
  );
};

export default Slider;
