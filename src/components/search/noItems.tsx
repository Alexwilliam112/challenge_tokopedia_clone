import Link from "next/link";
import styles from "./notfound.module.css";
import Image from "next/image";

const NoItems = () => {
  return (
    <div className={styles.frameParent}>
      <Image
        alt=""
        src="/pictures/notfound.png"
        className={styles.frameChild}
        height={2000}
        width={2000}
      />
      <div className={styles.frameGroup}>
        <div className={styles.oopsProdukNggakDitemukanParent}>
          <b className={styles.oopsProdukNggak}>Oops, wishlist masih kosong</b>
          <div className={styles.cobaKataKunci}>
            Yuk cari produk favoritmu dan tambahkan ke wishlist.
          </div>
        </div>
        <div className={styles.gantiKataKunciWrapper}>
          <Link href="/products">
            <b className={styles.gantiKataKunci}>Cari Produk</b>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NoItems;
