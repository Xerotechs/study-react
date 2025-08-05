import styles from "@/page/page.module.css";
import { createMetadata } from "@/lib/metadata";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { ClickLink } from "@/components/ClickLink";

// Metadataを設定
export const metadata = createMetadata("Page", "Page");

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <ClickLink />
      <Main page={"page"} />
      <Footer />
    </div>
  );
}
