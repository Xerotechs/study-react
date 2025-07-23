import Image from "next/image";
import { Headline } from "./Headline";
import { Links } from "./Links";

interface  Props{
    page:string
}

export function Main({page}:Props){
    return(
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <Image
                className="dark:invert"
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