/**
 * ファイル名
 * @property title - ファイル名
 */
type Props = {
    title:string
}

/**
 * 画面中央の手順表示
 * @param title - ファイル名
 * @returns 画面中央の手順表示
 */
export default function Headline({title}:Props){
    return(
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
            <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                {title}.tsx
            </code>
            .
            </li>
            <li className="tracking-[-.01em]">
            pages/{title}.tsx
            </li>
        </ol>
    );
}