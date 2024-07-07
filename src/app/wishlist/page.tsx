"use client";
import NoItems from "@/components/search/noItems";
import styles from "./wishlist.module.css";
import ProductCard from "@/components/productCard/wishlistCard";
import { ProductModel } from "@/db/models/products";
import { Suspense, useEffect, useState } from "react";
import SuccessModal from "@/components/modals/successMessage";
import ErrorModal from "@/components/modals/errorMessage";
import LoadingFallback from "@/components/loadingFallback";

export default function Wishlist() {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch("/api/wishlist");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch wishlist", error);
      }
    };

    fetchWishlist();
  }, []);

  return (
      <Suspense fallback={<LoadingFallback />}>
        <div className="pageBody">
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.wishlistParent}>
                <div className={styles.wishlist}>Wishlist</div>
                <div className={styles.wishlist}>/</div>
                <div className={styles.semuaWishlist}>Semua Wishlist</div>
              </div>
              <b className={styles.semuaWishlist1}>Semua Wishlist</b>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.filterParent}>
                <b className={styles.filter}>Filter</b>
                <div className={styles.frameDiv}>
                  <div className={styles.penawaranParent}>
                    <b className={styles.filter}>Penawaran</b>
                    <div className={styles.frameParent1}>
                      <div className={styles.frameParent2}>
                        <input type="checkbox" className={styles.checkbox} />
                        <div className={styles.wishlist}>Cashback</div>
                      </div>
                      <div className={styles.frameParent2}>
                        <input type="checkbox" className={styles.checkbox} />
                        <div className={styles.wishlist}>Diskon</div>
                      </div>
                      <div className={styles.frameParent2}>
                        <input type="checkbox" className={styles.checkbox} />
                        <div className={styles.wishlist}>COD</div>
                      </div>
                      <div className={styles.frameParent2}>
                        <input type="checkbox" className={styles.checkbox} />
                        <div className={styles.wishlist}>Harga Grosir</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.penawaranParent}>
                    <b className={styles.filter}>Stok</b>
                    <div className={styles.frameParent1}>
                      <div className={styles.frameParent2}>
                        <input type="checkbox" className={styles.checkbox} />
                        <div className={styles.wishlist}>Preorder</div>
                      </div>
                      <div className={styles.frameParent2}>
                        <input type="checkbox" className={styles.checkbox} />
                        <div className={styles.wishlist}>Tersedia</div>
                      </div>
                      <div className={styles.frameParent2}>
                        <input type="checkbox" className={styles.checkbox} />
                        <div className={styles.wishlist}>Tidak Tersedia</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.penawaranParent}>
                    <b className={styles.filter}>Kategori</b>
                    <div className={styles.frameParent10}>
                      <div className={styles.categoryContainer}>
                        <div className={styles.category}>
                          Audio, Kamera & Elektronik
                        </div>
                      </div>
                      <div className={styles.categoryContainer}>
                        <div className={styles.category}>Buku</div>
                      </div>
                      <div className={styles.categoryContainer}>
                        <div className={styles.category}>Dapur</div>
                      </div>
                      <div className={styles.categoryContainer}>
                        <div className={styles.category}>Elektronik</div>
                      </div>
                      <div className={styles.categoryContainer}>
                        <div className={styles.category}>
                          Fashion Anak & Bayi
                        </div>
                      </div>
                      <div className={styles.categoryContainer2}>
                        <b className={styles.category}>
                          Lihat Kategori Lainnya
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <SuccessModal />
              <ErrorModal />
              <div className={styles.frameParent11}>
                <div className={styles.frameChild5} />
                <div className={styles.cardContainer}>
                  {products.length === 0 ? (
                    <NoItems />
                  ) : (
                    products.map((product, index) => (
                      <ProductCard
                        id={product._id.toString()}
                        key={index}
                        slug={product.slug}
                        name={product.name}
                        excerpt={product.excerpt}
                        price={product.price}
                        tags={product.tags}
                        thumbnail={product.thumbnail}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
  );
}
