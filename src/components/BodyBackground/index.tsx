"use client";

import { useEffect } from "react";

interface Props {
  color: string;
}

export function BodyBackground({ color }: Props) {
  useEffect(() => {
    // マウント時処理
    document.body.style.background = color;
    return () => {
      // アンマウント時処理
      document.body.style.background = "";
    };
  }, [color]);

  return null; // DOMを描画しない副作用専用コンポーネント
}
