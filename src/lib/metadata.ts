import type { Metadata } from "next";

export function createMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    // 共通の設定もここで定義
    openGraph: {
      title,
      description,
    }
  };
}
