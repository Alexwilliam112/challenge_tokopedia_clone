import Image from "next/image";
import styles from "./login.module.css";
import { handleLogin } from "./action";
import ErrorModal from "@/components/modals/errorMessage";
import Link from "next/link";
import { Suspense } from "react";
import LoadingFallback from "@/components/loadingFallback";

export default function Home() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className={styles.body}>
        <ErrorModal />
        <form action={handleLogin}>
          <div className={styles.loginbg1Parent}>
            <Image
              className={styles.loginbg1Icon}
              alt=""
              src="/pictures/loginBG.png"
              height={1000}
              width={1000}
            />
            <div className={styles.frameParent}>
              <div className={styles.tkpLogo1Parent}>
                <Image
                  className={styles.tkpLogo1Icon}
                  alt=""
                  src="/tokopedia_logo.svg"
                  height={1000}
                  width={1000}
                />
                <div className={styles.frameGroup}>
                  <div className={styles.masukParent}>
                    <b className={styles.masuk}>Masuk</b>
                    <Link className={styles.daftar} href="/register">
                      Daftar
                    </Link>
                  </div>
                  <div className={styles.frameContainer}>
                    <input
                      type="text"
                      name="email"
                      className={styles.nomorHpAtauEmailWrapper}
                      placeholder="Email"
                    />
                    <div className={styles.contohTestusermailcom}>
                      Contoh: testUser@mail.com
                    </div>
                    <div className={styles.gapBox}></div>
                    <input
                      type="password"
                      name="password"
                      className={styles.nomorHpAtauEmailWrapper}
                      placeholder="Password"
                    />
                  </div>
                  <div className={styles.butuhBantuanWrapper}>
                    <div className={styles.masuk}>Butuh bantuan?</div>
                  </div>
                  <div className={styles.frameDiv}>
                    <button type="submit" className={styles.lanjutWrapper}>
                      <b className={styles.loginButton}>Lanjut</b>
                    </button>
                    <div className={styles.frameParent1}>
                      <div className={styles.frameChild} />
                      <b className={styles.masuk}>atau</b>
                      <div className={styles.frameChild} />
                    </div>
                    <div className={styles.frameParent2}>
                      <div className={styles.scanKodeQrWrapper}>
                        <b className={styles.masuk}>Scan Kode QR</b>
                      </div>
                      <div className={styles.google1Parent}>
                        <Image
                          className={styles.google1Icon}
                          alt=""
                          src="/icons/actions/google.svg"
                          height={1000}
                          width={1000}
                        />
                        <b className={styles.masuk}>Masuk dengan Google</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.ptTokopediaParent}>
                <div className={styles.masuk}>2009-2024, PT Tokopedia</div>
                <div className={styles.masuk}>|</div>
                <div className={styles.bantuan}>Bantuan</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Suspense>
  );
}
