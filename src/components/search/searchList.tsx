"use client";
import styles from "./search.module.css";
import ProductCard from "@/components/productCard/productCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
import NotFound from "@/components/search/notfound";

type ProductCardProps = {
  _id: string;
  slug: string;
  name: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
};

export default function SearchList({ products }: { products: ProductCardProps[] }) {
  const [displayedProducts, setDisplayedProducts] = useState<ProductCardProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;

  useEffect(() => {
    setDisplayedProducts(products.slice(0, pageSize));
  }, [products]);

  const fetchMoreData = () => {
    console.log("Fetching more data...");
    const nextPage = currentPage + 1;
    const newProducts = products.slice(0, nextPage * pageSize);
    console.log("Next Page:", nextPage);
    console.log("New Products:", newProducts);
    setDisplayedProducts(newProducts);
    setCurrentPage(nextPage);
  };

  if (products.length === 0) {
    return <NotFound />;
  }

  return (
    <div id="scrollableDiv" className={styles.scrollContainer}>
      <InfiniteScroll
        dataLength={displayedProducts.length}
        next={fetchMoreData}
        hasMore={displayedProducts.length < products.length}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more products</p>}
        scrollableTarget="scrollableDiv"
      >
        <div className={styles.cardsContainer}>
          {displayedProducts.map((el: ProductCardProps) => (
            <ProductCard
              key={el._id}
              id={el._id.toString()}
              slug={el.slug}
              name={el.name}
              price={el.price}
              excerpt={el.excerpt}
              tags={el.tags}
              thumbnail={el.thumbnail}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
