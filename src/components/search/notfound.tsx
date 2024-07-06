import styles from "./notfound.module.css";
import Image from "next/image";

const NotFound = () => {
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
          <b className={styles.oopsProdukNggak}>Oops, produk nggak ditemukan</b>
          <div className={styles.cobaKataKunci}>
            Coba kata kunci lain atau cek produk rekomendasi di bawah.
          </div>
        </div>
        <div className={styles.gantiKataKunciWrapper}>
          <b className={styles.gantiKataKunci}>Ganti kata kunci</b>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
