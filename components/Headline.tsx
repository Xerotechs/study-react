import React from 'react';
/**
 * ファイル名
 * @property title - ファイル名
 */
interface  Props {
    title:string
    children:React.ReactNode
}

/**
 * 画面中央の手順表示
 * @param title - ファイル名
 * @returns 画面中央の手順表示
 */
export function Headline({title,children}:Props){
    return(
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
            <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                {title}.tsx
            </code>
            .
            </li>
            {children}
        </ol>
    );
}