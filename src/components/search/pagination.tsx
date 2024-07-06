"use client";
import styles from "./search.module.css";
import { useState } from "react";

export default function Pagination({
  setPage,
  totalPage,
}: {
  setPage: (page: number) => void;
  totalPage: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page: number) => {
    setCurrentPage(page);
    setPage(page);
  };
  
  const pages = Array.from({ length: totalPage }, (_, index) => index + 1);

  return (
    <div className={styles.frameParent}>
      {pages.map((page) => (
        <div
          key={page}
          className={page === currentPage ? styles.selected : styles.unselected}
          onClick={() => handleClick(page)}
        >
          <b>{page}</b>
        </div>
      ))}
    </div>
  );
}
