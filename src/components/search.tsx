"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./header.module.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>(searchTerm);
  const router = useRouter();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 400);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      router.push(`/products?search=${debouncedSearchTerm}`);
    }
  }, [debouncedSearchTerm, router]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDebouncedSearchTerm(searchTerm);
    router.push(`/products?search=${searchTerm}`,);
  };

  return (
    <form className={styles.headerCenter} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Cari di Tokopedia"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </form>
  );
};

export default Search;
