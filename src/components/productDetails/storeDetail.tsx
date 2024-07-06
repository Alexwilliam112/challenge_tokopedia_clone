import styles from "./storeDetail.module.css"
import Image from "next/image";

const StoreDetail = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.ellipseParent}>
          <Image alt="" className={styles.frameChild} src="/pictures/goldStore.jpg" height={60} width={60} />
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.rectangleParent}>
                <Image alt="" className={styles.frameItem} src="/icons/proMerchant.png" height={60} width={60} />
                <b className={styles.rajaRamNusantara}>RAJA RAM NUSANTARA</b>
              </div>
              <b className={styles.online}>Online</b>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.rectangleGroup}>
                <Image alt="" className={styles.frameInner} src="/icons/powerMerchant.png" height={60} width={60} />
                <div className={styles.parent}>
                  <div className={styles.rajaRamNusantara}>4.9</div>
                  <div className={styles.rb}>(300,8 rb)</div>
                </div>
              </div>
              <div className={styles.rectangleContainer}>
                <Image alt="" className={styles.frameInner} src="/icons/actions/clockIcon.svg" height={60} width={60} />
                <div className={styles.parent}>
                  <div className={styles.rajaRamNusantara}>+ 4 jam</div>
                  <div className={styles.rb}>pesanan diproses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.followWrapper}>
          <b className={styles.follow}>Follow</b>
        </div>
      </div>
      <div className={styles.pengirimanParent}>
        <b className={styles.pengiriman}>Pengiriman</b>
        <div className={styles.dikirimDariJakartaUtaraParent}>
          <div className={styles.dikirimDariJakarta}>
            Dikirim dari Jakarta Utara
          </div>
          <div className={styles.dikirimDariJakarta}>
            Ongkir Reguler 7rb - 10rb
          </div>
          <div className={styles.estimasiTiba58}>Estimasi tiba 5-8 Jul</div>
          <div className={styles.kurirLainnyaParent}>
            <div className={styles.dikirimDariJakarta}>Kurir lainnya:</div>
            <div className={styles.instanWrapper}>
              <b className={styles.rajaRamNusantara}>Instan</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StoreDetail;