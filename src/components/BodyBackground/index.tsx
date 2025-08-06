"use client";

import { useEffect } from "react";

interface Props {
  color: string;
}

export function BodyBackground({ color }: Props) {
  useEffect(() => {
    console.log("マウント時");
    document.body.style.background = color;
    return () => {
      console.log("アンマウント時");
      document.body.style.background = "";
    };
  }, [color]);

  return null; // DOMを描画しない副作用専用コンポーネント
}
