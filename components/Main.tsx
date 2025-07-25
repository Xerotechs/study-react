import Image from "next/image";
import { Headline } from "./Headline";
import { Links } from "./Links";
import styles from "../src/app/page.module.css";

interface  Props{
    page:string
}

export function Main({page}:Props){
    return(
        <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Headline
                title = "index"
            >
                <li className="tracking-[-.01em]">
                pages/{page}.tsx
                </li>
            </Headline>

        <Links />
      </main>
    );
}