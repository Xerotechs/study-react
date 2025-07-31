import React from 'react';
import Link from 'next/link';
import styles from "./Header.module.css";

/**
 * ヘッダーの手順表示
 */
export function Header(){
    return(
      <header className={styles.header}>
        <Link href="/">
          <div className={styles.anchor}>Page</div>
        </Link>
        <Link href="/about">
          <div className={styles.anchor}>About</div>
        </Link>
      </header>
    );
}