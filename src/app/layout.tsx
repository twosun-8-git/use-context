import type { Metadata } from "next";
import "./globals.css";

import { Header } from "./_components/Header";

export const metadata: Metadata = {
  title: "My useContext",
  description: '状態管理のReactフック"useContext"のサンプルです。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-full max-w-4xl mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
