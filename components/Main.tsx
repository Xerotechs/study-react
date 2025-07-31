import styles from "./Main.module.css";
import { Headline } from "./Headline";
import { Links } from "./Links";

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