import Link from "next/link";

export function Header() {
  return (
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
  );
}
