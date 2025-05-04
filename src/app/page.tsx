"use client";

import { DateProvider } from "./_contexts";
import { Container } from "./_components/Container";

export default function Home() {
  return (
    <DateProvider>
      <Container />
    </DateProvider>
  );
}
