"use client";
import Image from "next/image";
import styles from "./addWishlist.module.css";
import { useRouter } from "next/navigation";

export default function AddWishlist({ productId }: { productId: string }) {
  const router = useRouter();

  const handleAddWishlist = async () => {
    const response = await fetch("/api/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productId),
    });

    const responseJson = await response.json();

    if (responseJson.statusCode === 201) {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("notif", "Added to wishlist");
      router.push(newUrl.toString(), { scroll: false });
    }

    if (responseJson.statusCode === 401) {
      router.push('/login')
    }

    if (responseJson.statusCode === 400) {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("error", "Item already exist in wishlist");
      router.push(newUrl.toString(), { scroll: false });
    }
  };

  return (
      <div className={styles.frameParent9} onClick={handleAddWishlist}>
        <Image
          className={styles.frameChild4}
          src="/icons/actions/heartIcon.svg"
          alt=""
          width={10}
          height={10}
        />
        <div className={styles.ramPcKaizen}>Wishlist</div>
      </div>
  );
}
