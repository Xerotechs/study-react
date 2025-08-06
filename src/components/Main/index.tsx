import styles from "@/components/Main/Main.module.css";
import { Headline } from "@/components/Headline";
import { Links } from "@/components/Links";
import { BodyBackground } from "@/components/BodyBackground";

interface  Props{
    page:string
}

export function Main({page}:Props){
    return(
        <main className={styles.main}>
            <BodyBackground color="skyblue" />
            <Headline
                title = {page}
            >
                <li>
                    app/{page}.tsx
                </li>
            </Headline>

            <Links />
        </main>
    );
}