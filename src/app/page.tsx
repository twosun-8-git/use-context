"use client";

import { Iso } from "./_components/Iso";
import { Localize } from "./_components/Localize";
import { Timestamp } from "./_components/Timestamp";
import { Original } from "./_components/Original";
import { useDateContext } from "./_context";
import { Container } from "./_components/Container";
export default function Home() {
  const { date, setDate } = useDateContext();

  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="flex items-center gap-2">
        <label htmlFor="date">日付を選択</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border w-[218px] rounded p-2 ml-1 border-gray-300"
        />
      </div>
      <Container>
        <Original />
        <Iso />
        <Localize />
        <Timestamp />
      </Container>
    </div>
  );
}
