"use client";
import React, { useEffect, useState } from "react";
import {
  HiOutlineShoppingCart,
  HiOutlineHeart,
  HiOutlineMail,
} from "react-icons/hi";
import styles from "./header.module.css";
import Link from "next/link";
import { getUsernameFromCookies } from "@/lib/getUsername";
import { handleLogout } from "./actions";
import Search from "./search"; 

export default function Header() {
  const [username, setUsername] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const onLogout = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await handleLogout();
    if (response.success) {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    const username = getUsernameFromCookies();

    if (username) {
      setIsLoggedIn(true);
      setUsername(username);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <header className={styles.header}>
        <Link className={styles.headerLeft} href="/">
          <img src="/tokopedia_logo.svg" alt="Logo" />
        </Link>
        <Search />
        <div className={styles.headerRight}>
          <div className={styles.iconGroup}>
            <HiOutlineShoppingCart className={styles.icon} />
            <Link href="/wishlist">
              <HiOutlineHeart className={styles.icon} />
            </Link>
            <HiOutlineMail className={styles.icon} />
          </div>
          {isLoggedIn ? (
            <>
              <span className={styles.username}>{username}</span>
              <form onSubmit={onLogout}>
                <button type="submit" className={styles.logout}>
                  Logout
                </button>
              </form>
            </>
          ) : (
            <>
              <Link href="/register" className={styles.signupButton}>
                Sign Up
              </Link>
              <Link href="/login" className={styles.loginButton}>
                Log In
              </Link>
            </>
          )}
        </div>
      </header>
      <header className={styles.headerSecond}>
        <div>Bear Brand</div>
        <div>Master Rem</div>
        <div>Kasur Lipat</div>
        <div>Samsung S10</div>
        <div>Botol Minum</div>
        <div>Dompet Kartu</div>
        <div />
      </header>
    </>
  );
}
