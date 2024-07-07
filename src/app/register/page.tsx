import Link from "next/link";
import styles from "./register.module.css";
import Image from "next/image";
import ErrorModal from "@/components/modals/errorMessage";
import SuccessModal from "@/components/modals/successMessage";
import { handleRegister } from "./action";
import LoadingFallback from "@/components/loadingFallback";
import { Suspense } from "react";

export default function SearchPage() {
  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <ErrorModal />
        <SuccessModal />
        <form action={handleRegister}>
          <div className={styles.tkpLogo1Parent}>
            <Image
              className={styles.tkpLogo1Icon}
              alt=""
              src="/tokopedia_logo.svg"
              height={1000}
              width={1000}
            />
            <div className={styles.registerbg1Parent}>
              <Image
                className={styles.registerbg1Icon}
                alt=""
                src="/pictures/registerBG.png"
                width={10000}
                height={10000}
              />
              <div className={styles.frameParent}>
                <div className={styles.daftarSekarangParent}>
                  <b className={styles.daftarSekarang}>Daftar Sekarang</b>
                  <div className={styles.sudahPunyaAkunContainer}>
                    <span>Sudah punya akun Tokopedia?</span>
                    <span className={styles.daftar}>
                      <b className={styles.b}>{` `}</b>
                      <Link href="/login">Login</Link>
                    </span>
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.google1Parent}>
                    <Image
                      className={styles.google1Icon}
                      alt=""
                      src="/icons/actions/google.svg"
                      width={1000}
                      height={1000}
                    />
                    <b className={styles.daftarSekarang}>Google</b>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.frameChild} />
                  <b className={styles.daftarSekarang}>atau</b>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.frameContainer}>
                  <input
                    type="text"
                    name="email"
                    className={styles.emailWrapper}
                    placeholder="Email"
                  />
                </div>
                <div className={styles.frameContainer}>
                  <input
                    type="text"
                    name="username"
                    className={styles.emailWrapper}
                    placeholder="Username"
                  />
                </div>
                <div className={styles.frameContainer}>
                  <input
                    type="text"
                    name="name"
                    className={styles.emailWrapper}
                    placeholder="Fullname"
                  />
                </div>
                <div className={styles.frameContainer}>
                  <input
                    type="password"
                    name="password"
                    className={styles.emailWrapper}
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className={styles.lanjutWrapper}>
                  <b className={styles.daftarSekarang}>Lanjut</b>
                </button>
                <div className={styles.denganMendaftarSayaContainer}>
                  <p className={styles.denganMendaftarSaya}>
                    Dengan mendaftar, saya menyetujui
                  </p>
                  <p className={styles.syaratKetentuanSertaKebij}>
                    <b
                      className={styles.syaratKetentuan}
                    >{`Syarat & Ketentuan`}</b>
                    <span className={styles.serta}>{` serta `}</span>
                    <b>Kebijakan Privasi Tokopedia</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Suspense>
    </>
  );
}
