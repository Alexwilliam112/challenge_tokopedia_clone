import React from "react";
import styles from "./categoryCard.module.css";

const CategoryCard = () => {
  return (
    <div className={styles.frameParent}>
      <div
        className={styles.justForYouParent}
        style={{
          backgroundImage: 'url("/categoryCard/background-blue.jpg")',
        }}
      >
        <b className={styles.justForYou}>Just For You</b>
        <div className={styles.frameChild} />
      </div>
      <div
        className={styles.justForYouGroup}
        style={{
          backgroundImage: 'url("/categoryCard/background-green.jpg")',
        }}
      >
        <b className={styles.justForYou}>RAM Laptop</b>
        <div className={styles.frameChild} />
      </div>
      <div
        className={styles.justForYouContainer}
        style={{
          backgroundImage: 'url("/categoryCard/background-orange.jpg")',
        }}
      >
        <b className={styles.justForYou}>SSD</b>
        <div className={styles.frameChild} />
      </div>
      <div
        className={styles.frameDiv}
        style={{
          backgroundImage: 'url("/categoryCard/background-pink.jpg")',
        }}
      >
        <b className={styles.justForYou}>RAM Komputer</b>
        <div className={styles.frameChild} />
      </div>
      <div
        className={styles.justForYouParent1}
        style={{
          backgroundImage: 'url("/categoryCard/background-blue.jpg")',
        }}
      >
        <b className={styles.justForYou}>Mirip yang kamu cek</b>
        <div className={styles.frameChild} />
      </div>
    </div>
  );
};

export default CategoryCard;
