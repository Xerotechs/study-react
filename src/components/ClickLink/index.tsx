'use client';
// onClickを使うにはサーバーサイドレンダリングでは使えないらしいので、
// 切り出して、'use client'でクライアントでレンダリングしたほうがいいらしい

import { useState } from "react";

export function ClickLink() {
    // 使う変数と、useStateを使う変数をセットで宣言して代入するのが慣例的な書き方らしい
    const [foo, setFoo] = useState<number>(1);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setFoo(foo => foo + 1);
        setFoo(foo => foo + 1);
    }

    return (
        <>
            <h1>{foo.toString()}</h1>
            <button onClick={handleClick}>
                ボタン
            </button>
        </>
    );
}
