import Image from "next/image";
import styles from "./Links.module.css";

type Item = {
  href: string;
  target: string;
  rel: string;
  styleName: keyof typeof styles ;
  img: string;
  alt: string;
  title: string;
};

const ITEMS: Item[] = [
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    styleName:"primary",
    img:"/vercel.svg",
    alt:"Vercel logomark",
    title: "デプロイ"
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    styleName:"secondary",
    img:"/globe.svg",
    alt:"Globe logomark",
    title: "ドキュメント"
  }
];

export function Links(){
  return(
    <div className={styles.ctas}>
      {ITEMS.map(item=>{
        return(
          <a
            key={item.href}
            className={styles[item.styleName]}
            href = {item.href}
            target = {item.target}
            rel = {item.rel}
          >
            <Image
              className={styles.logo}
              src={item.img}
              alt={item.alt}
              width={20}
              height={20}
            />
            {item.title}
          </a>
        )
      })}
    </div>
  );
}