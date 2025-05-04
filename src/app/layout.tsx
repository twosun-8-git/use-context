import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
import { DateProvider } from "./_context";

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
          <header className="flex items-center justify-between py-8">
            <h1>
              <Link href="/" className="text-4xl font-bold">
                My useContext
              </Link>
            </h1>
            <p className="text-sm">
              状態管理のReactフック&nbsp;
              <a
                href="hhttps://ja.react.dev/reference/react/useContext"
                target="_blank"
                className="underline text-blue-500"
              >
                &quot;useContext&quot;
              </a>
              &nbsp;のサンプルです。
            </p>
          </header>
          <DateProvider>{children}</DateProvider>
        </div>
      </body>
    </html>
  );
}
