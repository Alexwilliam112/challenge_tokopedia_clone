"use client";
import { ProductModel } from "@/db/models/products";
import { useState } from "react";
import styles from "./homepage.module.css";
import Carousel from "@/components/home/carousel";
import ProductCard from "@/components/productCard/productCard";
import CategoryCard from "@/components/home/categoryCard";

export default function ProductList({ products }: {products: ProductModel[]}) {
  const [displayedProducts, setDisplayedProducts] = useState(products);

  const handleSeeAll = async () => {
    const response = await fetch("/api/products");
    if (response.ok) {
      const products = await response.json();
      setDisplayedProducts(products);
    }
  };

  return (
    <>
      <Carousel />
      <CategoryCard />
      <div className={styles.containerTitleContent}>
        <div className={styles.cardTitle}>Lagi trending, nih</div>
        <div onClick={handleSeeAll}>See All</div>
      </div>
      <div className={styles.cardsContainer}>
        {displayedProducts.map((product: ProductModel, index: number) => (
          <ProductCard
            key={index}
            id={product._id.toString()}
            slug={product.slug}
            name={product.name}
            excerpt={product.excerpt}
            price={product.price}
            tags={product.tags}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
    </>
  );
}
