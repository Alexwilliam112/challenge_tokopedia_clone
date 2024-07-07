"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./carousel.module.css";

interface CarouselItem {
  src: string;
  altText: string;
  caption: string;
}

const items: CarouselItem[] = [
  {
    src: "/promo/promo2.png",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: "/promo/promo1.png",
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: "/promo/promo3.png",
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrevious = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleGoToIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner}>
        {items.map((item, index) => (
          <div
            key={item.src}
            className={`${styles.carouselItem} ${
              index === activeIndex ? styles.active : ""
            }`}
          >
            <Image
              src={item.src}
              alt={item.altText}
              className={styles.carouselImage}
              width={80000}
              height={40000}
              style={{ objectFit: "cover" }}
              priority={true}
            />
          </div>
        ))}
      </div>
      <div className={styles.carouselControls}>
        <button onClick={handlePrevious}>
          <Image src="/icons/leftArrow.svg" alt="" width={30} height={30} />
        </button>
        <button onClick={handleNext}>
          <Image src="/icons/rightArrow.svg" alt="" width={30} height={30} />
        </button>
      </div>
      <div className={styles.carouselIndicators}>
        {items.map((_, index) => (
          <button
            key={index}
            className={`${styles.carouselIndicator} ${
              index === activeIndex ? styles.active : ""
            }`}
            onClick={() => handleGoToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
