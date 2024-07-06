import Link from "next/link";
import Image from "next/image";
import styles from "./product.module.css";
import StarIcon from "@/components/svg/starIcon";
import StoreDetail from "@/components/productDetails/storeDetail";
import AddWishlist from "@/components/CTA/addWishlist";
import { getProductBySlug } from "@/db/models/products";
import { ProductModel } from "@/db/models/products";
import ImageBox from "@/components/productDetails/imageBox";
import SuccessModal from "@/components/modals/successMessage";
import ErrorModal from "@/components/modals/errorMessage";

function formatNumber(num: number): string {
  return new Intl.NumberFormat("id-ID").format(num);
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options)
    .format(date)
    .replace(/ /g, " - ");
}

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const product: ProductModel = await getProductBySlug(params.slug);
  
  return (
    <>
      <div className="pageBody">
        <ErrorModal />
        <SuccessModal />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <Image alt="" className={styles.frameChild} src={product.thumbnail} width={1000} height={1000}/>
            <div className={styles.frameContainer}>
              {product.images.map((image) => {
                return (
                  <ImageBox key={Math.random()} src={image}/>
                )
              })}
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.ramPcKaizenDd416gb25600Parent}>
                <b className={styles.ramPcKaizen2}>{product.name}</b>
                <div className={styles.terjual750Parent}>
                  <div className={styles.ramPcKaizen}>Terjual 750+</div>
                  <div className={styles.ramPcKaizen}>
                    <StarIcon />
                    4.9 (288 rating)
                  </div>
                  <div className={styles.ramPcKaizen}>Diskusi (25)</div>
                </div>
              </div>
              <b className={styles.rp495000}>
                Rp {formatNumber(product.price)}
              </b>
            </div>
            <div className={styles.frameChild3} />
            <div className={styles.frameParent3}>
              <div className={styles.exercptHereInputParent}>
                <div className={styles.exercptHereInput}>{product.excerpt}</div>
                <div className={styles.tagsParent}>
                  <div className={styles.ramPcKaizen}>Tags:</div>
                  <div className={styles.tag1Parent}>
                    {product.tags.map((tag) => {
                      return (
                        <div key={tag} className={styles.ramPcKaizen}>
                          #{tag}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.etalaseParent}>
                  <div className={styles.ramPcKaizen}>Etalase:</div>
                  <b className={styles.semuaEtalase}>Semua Etalase</b>
                </div>
              </div>
              <div className={styles.exercptHereInput}>
                {product.description}
              </div>
              <div className={styles.etalaseParent}>
                <div className={styles.ramPcKaizen}>Created At:</div>
                <div className={styles.january2024}>
                  {formatDate(product.createdAt.toString())}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.megaElectrodealsWrapper}>
              <b className={styles.ramPcKaizen}>Mega Electrodeals</b>
            </div>
            <div className={styles.aturJumlahDanCatatanParent}>
              <b className={styles.aturJumlahDan}>Atur jumlah dan catatan</b>
              <div className={styles.frameParent5}>
                <div className={styles.parent}>
                  <div className={styles.div}>-</div>
                  <div className={styles.div1}>1</div>
                  <div className={styles.div2}>+</div>
                </div>
                <div className={styles.stokTotalParent}>
                  <div className={styles.ramPcKaizen}>Stok Total:</div>
                  <div className={styles.ramPcKaizen}>768</div>
                </div>
              </div>
              <div className={styles.tambahCatatan}>Tambah Catatan</div>
              <div className={styles.subtotalParent}>
                <div className={styles.ramPcKaizen}>Subtotal</div>
                <b className={styles.rp4950001}>
                  Rp {formatNumber(product.price)}
                </b>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.frameParent7}>
                  <div className={styles.keranjangWrapper}>
                    <div className={styles.ramPcKaizen}>+Keranjang</div>
                  </div>
                  <div className={styles.beliLangsungWrapper}>
                    <div className={styles.ramPcKaizen}>Beli Langsung</div>
                  </div>
                </div>
                <div className={styles.frameParent8}>
                  <div className={styles.frameParent9}>
                    <Image
                      className={styles.frameChild4}
                      src="/icons/actions/chatIcon.svg"
                      alt=""
                      width={10}
                      height={10}
                    />
                    <div className={styles.ramPcKaizen}>Chat</div>
                  </div>
                  <AddWishlist productId={product._id.toString()}/>
                  <div className={styles.frameParent9}>
                    <Image
                      className={styles.frameChild4}
                      src="/icons/actions/shareIcon.svg"
                      alt=""
                      width={10}
                      height={10}
                    />
                    <div className={styles.ramPcKaizen}>Share</div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              className={styles.frameChild9}
              src="/promo/promo4.jpg"
              alt=""
              width={"400"}
              height={200}
            />
          </div>
        </div>
        <div className={styles.store}>
          <StoreDetail />
        </div>
      </div>
    </>
  );
}
