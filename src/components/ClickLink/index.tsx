'use client';
// onClickを使うにはサーバーサイドレンダリングでは使えないらしいので、
// 切り出して、'use client'でクライアントでレンダリングしたほうがいいらしい

import { useCallback } from "react";

export function ClickLink() {
    const foo: number = 1;
    const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        alert(foo.toString());
    }, []);

    return (
        <a href="https://study-react-six-olive.vercel.app/" onClick={handleClick}>
            Webページ
        </a>
    );
}
