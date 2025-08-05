import styles from "@/page/page.module.css";
import { createMetadata } from "@/lib/metadata";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { ClickLink } from "@/components/ClickLink";

// このページ専用の metadata を定義
// Metadataを設定
export const metadata = createMetadata("About", "About");

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <ClickLink/>
      <Main page={"about"}/>
      <Footer/>
    </div>
  );
}
