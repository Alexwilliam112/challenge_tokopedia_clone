import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.tokopediaParent}>
        <div className={styles.tokopedia}>Tokopedia</div>
        <div className={styles.tentangTokopedia}>Tentang Tokopedia</div>
        <div className={styles.tentangTokopedia}>Hak Kekayaan Intelektual</div>
        <div className={styles.tentangTokopedia}>Karir</div>
        <div className={styles.tentangTokopedia}>Blog</div>
        <div className={styles.tentangTokopedia}>Tokopedia Parents</div>
        <div className={styles.tentangTokopedia}>
          Tokopedia Affiliate Program
        </div>
        <div className={styles.tentangTokopedia}>Tokopedia B2B Digital</div>
        <div className={styles.tentangTokopedia}>
          Tokopedia Marketing Solutions
        </div>
        <div className={styles.tentangTokopedia}>
          Kalkulator Indeks Masa Tubuh
        </div>
        <div className={styles.tentangTokopedia}>Tokopedia Farma</div>
        <div className={styles.tentangTokopedia}>Promo Hari ini</div>
        <div className={styles.tentangTokopedia}>Langsung Laku</div>
        <div className={styles.tentangTokopedia}>Beli Lokal</div>
        <div className={styles.tentangTokopedia}>Tukar Tambah Laptop</div>
        <div className={styles.tentangTokopedia}>Promo 6.6</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.beliParent}>
          <div className={styles.tokopedia}>Beli</div>
          <div className={styles.tentangTokopedia}>{`Tagihan & Top Up`}</div>
          <div className={styles.tentangTokopedia}>Tokopedia COD</div>
          <div className={styles.tentangTokopedia}>Bebas Ongkir</div>
        </div>
        <div className={styles.beliParent}>
          <div className={styles.tokopedia}>Jual</div>
          <div className={styles.tentangTokopedia}>Pusat Edukasi Seller</div>
          <div className={styles.tentangTokopedia}>Daftar Official Store</div>
        </div>
        <div className={styles.beliParent}>
          <div className={styles.tokopedia}>Bantuan dan Panduan</div>
          <div className={styles.tentangTokopedia}>Tokopedia Care</div>
          <div className={styles.tentangTokopedia}>Syarat dan Ketentuan</div>
          <div className={styles.tentangTokopedia}>Kebijakan Privasi</div>
        </div>
      </div>
      <div className={styles.keamananPrivasiParent}>
        <b className={styles.keamananPrivasi}>{`Keamanan & Privasi`}</b>
        <img className={styles.image3Icon} alt="" src="/privacyPolicy.jpg" />
      </div>
      <img className={styles.image2Icon} alt="" src="/footerLogo.png" />
    </div>
  );
};
export default Footer;
