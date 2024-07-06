import styles from "./rekomendasi.module.css";
import ProductCard from "../productCard/productCard";

const mockProducts = [
  {
    name: "Asus Vivobook Pro 15 M6500QC Ryzen 5",
    excerpt: "A high quality laptop designed for gaming",
    price: 11989000,
    tags: ["laptop", "gaming", "cheap"],
    thumbnail: "/recommendations/rec1.jpg",
  },
  {
    name: "Dell Inspiron 14 5406",
    excerpt: "Versatile 2-in-1 laptop for everyday use",
    price: 8999000,
    tags: ["laptop", "2-in-1", "versatile"],
    thumbnail: "/recommendations/rec2.jpg",
  },
  {
    name: "HP Pavilion Gaming 15-ec1013AX",
    excerpt: "Affordable gaming laptop with powerful specs",
    price: 13999000,
    tags: ["laptop", "gaming", "affordable"],
    thumbnail: "/recommendations/rec3.jpg",
  },
  {
    name: "Acer Swift 3 SF314-59",
    excerpt: "Lightweight and stylish laptop for daily tasks",
    price: 7999000,
    tags: ["laptop", "lightweight", "stylish"],
    thumbnail: "/recommendations/rec4.jpg",
  },
  {
    name: "Lenovo IdeaPad 3 15ADA05",
    excerpt: "Budget-friendly laptop with reliable performance",
    price: 5999000,
    tags: ["laptop", "budget", "reliable"],
    thumbnail: "/recommendations/rec5.jpg",
  },
  {
    name: "Apple MacBook Air M1",
    excerpt: "Supercharged by the Apple M1 chip",
    price: 16999000,
    tags: ["laptop", "apple", "M1"],
    thumbnail: "/recommendations/rec6.jpg",
  },
  {
    name: "MSI GF63 Thin 10SCXR",
    excerpt: "Portable gaming laptop with sleek design",
    price: 12999000,
    tags: ["laptop", "gaming", "portable"],
    thumbnail: "/recommendations/rec7.jpg",
  },
  {
    name: "Samsung Galaxy Book S",
    excerpt: "Ultra-light laptop with long battery life",
    price: 14999000,
    tags: ["laptop", "ultra-light", "long battery life"],
    thumbnail: "/recommendations/rec8.jpg",
  },
  {
    name: "Microsoft Surface Laptop Go",
    excerpt: "Stylish and compact laptop for on-the-go",
    price: 10999000,
    tags: ["laptop", "stylish", "compact"],
    thumbnail: "/recommendations/rec9.jpg",
  },
  {
    name: "Razer Blade 15 Base Model",
    excerpt: "High-performance gaming laptop with sleek design",
    price: 24999000,
    tags: ["laptop", "gaming", "high-performance"],
    thumbnail: "/recommendations/rec10.jpg",
  },
];

const Rekomendasi = () => {
  return (
    <div>
      <div className={styles.cardTitle}>Rekomendasi untukmu</div>
      <div className={styles.cardsContainer}>
        {mockProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            excerpt={product.excerpt}
            price={product.price}
            tags={product.tags}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};
export default Rekomendasi;
