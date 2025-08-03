import styles from "@/page/page.module.css";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";

export default function Home() {
  return (
      <div className={styles.page}>
        <Header/>
        <Main page={"about"}/>
        <Footer/>
    </div>
  );
}
