"use client";
import { useEffect, useState } from "react";
import styles from "./removeWishlist.module.css";

export default function RemoveWishlist({ id }: { id: string }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDelete = async () => {
    const response = await fetch(`/api/wishlist/${id}`, {
      method: "DELETE",
    });

    const responseJson = await response.json();

    if (responseJson.statusCode === 200) {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("notif", "Removed from wishlist");
      if (isClient) {
        window.location.assign(newUrl.toString());
      }
    }
  };

  return (
    <div className={styles.removeButton} onClick={handleDelete}>
      Remove
    </div>
  );
}
