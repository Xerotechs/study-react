import React from 'react';
import Image from "next/image";
import styles from "@/components/Headline/Headline.module.css";

/**
 * ファイル名
 * @property title - ファイル名
 */
interface  Props {
  title:string
  children:React.ReactNode
}

/**
 * 画面中央の手順表示
 * @param title - ファイル名
 * @returns 画面中央の手順表示
 */
export function Headline({title,children}:Props){
    return(
        <>
        <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />   
        <ol>
          <li>
            Get started by editing{" "}
            <code>{title}.tsx</code>.
          </li>
          {children}
        </ol>
        </>
    );
}