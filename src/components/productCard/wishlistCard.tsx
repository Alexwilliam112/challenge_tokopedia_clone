import styles from "./card.module.css";
import Image from "next/image";
import StarIcon from "@/components/svg/starIcon";
import RemoveWishlist from "../CTA/removeWishlist";

type ProductCardProps = {
  id: string;
  name: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  thumbnail,
}) => {
  return (
    <div className={styles.frameParentWishlist}>
      <Image
        className={styles.frameChild}
        alt=""
        src={thumbnail}
        width={2000}
        height={2000}
      />
      <div className={styles.frameGroup}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productPrice}>
          Rp {price.toLocaleString("id-ID")}
        </div>
        <div className={styles.storeName}>
          <Image alt="" src="/icons/officialStore.png" width={20} height={20} />
          BANDUNG STORE
        </div>
        <div className={styles.soldStats}>
          <StarIcon />
          5.0 | 3 terjual
        </div>
        <div className={styles.buttonContainer}>
          <RemoveWishlist id={id}/>
          <div className={styles.buyButton}>+Keranjang</div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
