import styles from "@/page/page.module.css";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import type { Metadata } from "next";

// このページ専用の metadata を定義
export const metadata: Metadata = {
  title: "About",
  description: "About"
};

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <Main page={"about"}/>
      <Footer/>
    </div>
  );
}
