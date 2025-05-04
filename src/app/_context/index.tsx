"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// 言語タイプの定義
type LocaleType = "JP" | "EN";

// 日付コンテキストの型定義
type DateContextType = {
  date: string;
  setDate: (date: string) => void;
  isoDate: string | null;
  localizedDate: string | null;
  timestamp: number | null;
  locale: LocaleType;
  setLocale: (locale: LocaleType) => void;
};

// デフォルト値の設定
const defaultContext: DateContextType = {
  date: "",
  setDate: () => {},
  isoDate: null,
  localizedDate: null,
  timestamp: null,
  locale: "JP",
  setLocale: () => {},
};

// コンテキストの作成
const DateContext = createContext<DateContextType>(defaultContext);

// コンテキストプロバイダー
export function DateProvider({ children }: { children: ReactNode }) {
  const [date, setDate] = useState<string>("");
  const [locale, setLocale] = useState<LocaleType>("JP");

  // ISO形式の日付
  const isoDate = date ? new Date(date).toISOString() : null;

  // ローカライズされた日付
  const localizedDate = new Date(date).toLocaleDateString();

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
        locale,
        setLocale,
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
