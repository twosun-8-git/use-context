"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// 日付コンテキストの型定義
type DateContextType = {
  date: string;
  setDate: (date: string) => void;
  isoDate: string | null;
  localizedDate: string | null;
  timestamp: number | null;
};

// デフォルト値の設定
const defaultContext: DateContextType = {
  date: "",
  setDate: () => {},
  isoDate: null,
  localizedDate: null,
  timestamp: null,
};

// コンテキストの作成
const DateContext = createContext<DateContextType>(defaultContext);

// コンテキストプロバイダー
export function DateProvider({ children }: { children: ReactNode }) {
  const [date, setDate] = useState<string>("");

  // ISO形式の日付
  const isoDate = date ? new Date(date).toISOString() : null;

  // ローカライズされた日付
  const localizedDate = date ? new Date(date).toLocaleString("ja-JP") : null;

  // タイムスタンプ
  const timestamp = date ? new Date(date).getTime() : null;

  return (
    <DateContext.Provider
      value={{
        date,
        setDate,
        isoDate,
        localizedDate,
        timestamp,
      }}
    >
      {children}
    </DateContext.Provider>
  );
}

// カスタムフック
export function useDateContext() {
  return useContext(DateContext);
}
