"use client";
import styles from "./storeDetail.module.css";
import Image from "next/image";

export default function ImageBox({ src }: { src: string }) {
  return (
    <Image
      alt=""
      src={src}
      className={styles.frameItemImage}
      width={1000}
      height={1000}
    />
  );
}
