"use client";
import styles from "./card.module.css";
import Image from "next/image";
import StarIcon from "@/components/svg/starIcon";
import AddWishlist from "../CTA/addWishlist";
import Link from "next/link";

export type ProductCardProps = {
  id: string;
  slug: string;
  name: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  slug,
  name,
  excerpt,
  price,
  tags,
  thumbnail,
}) => {
  return (
    <div className={styles.frameParent}>
      <Link href={`/products/${slug}`}>
        <Image
          className={styles.frameChild}
          alt=""
          src={thumbnail}
          width={2000}
          height={2000}
        />
      </Link>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          {tags.map((tag, index) => (
            <div key={index} className={styles.laptopWrapper}>
              <div className={styles.laptop}>#{tag}</div>
            </div>
          ))}
        </div>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productPrice}>
          Rp {price.toLocaleString("id-ID")}
        </div>
        <div className={styles.excerpt}>{excerpt}</div>
        <div className={styles.storeName}>
          <Image alt="" src="/icons/officialStore.png" width={20} height={20} />
          BANDUNG STORE
        </div>
        <div className={styles.soldStats}>
          <StarIcon />
          5.0 | 3 terjual
        </div>
        <AddWishlist productId={id} />
      </div>
    </div>
  );
};
export default ProductCard;
