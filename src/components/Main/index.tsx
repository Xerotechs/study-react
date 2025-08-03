import styles from "@/components/Main/Main.module.css";
import { Headline } from "@/components/Headline";
import { Links } from "@/components/Links";

interface  Props{
    page:string
}

export function Main({page}:Props){
    return(
        <main className={styles.main}>
            

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