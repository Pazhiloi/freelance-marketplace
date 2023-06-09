import { useEffect, useState } from "react";
import { ISlider } from "./slider.interface";

export const useSlider = (images: any, s: any) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [prevImage, setPrevImage] = useState(selectedImage);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const prevImageClassName = `${s.bigImg} ${s.prevImg}`;
  const selectedImageClassName = `${s.bigImg} ${
    isTransitioning ? s.nextImg : ""
  }`;

  const handleClick = (image: ISlider) => {
    setSelectedImage(image);
  };

  const handlePrev = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(images[nextIndex]);
  };

  

  useEffect(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Затримка після зміни зображення (в мс), можна налаштувати за потреби
    setPrevImage(selectedImage);
  }, [selectedImage]);
 const currentIndex = images.indexOf(selectedImage);
 const slideOffset = -currentIndex * 100;

  return {
    handleClick,
    handlePrev,
    handleNext,
    selectedImage,
    prevImage,
    isTransitioning,
    slideOffset,
    prevImageClassName,
selectedImageClassName
  };
};
