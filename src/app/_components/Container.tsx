"use client";

import { Iso } from "./Iso";
import { Localize } from "./Localize";
import { Timestamp } from "./Timestamp";
import { Original } from "./Original";
import { useDateContext } from "../_contexts/index";

export function Container() {
  const { date, setDate } = useDateContext();

  return (
    <div className="flex flex-col gap-5">
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
      <Original />
      <Iso />
      <Localize />
      <Timestamp />
    </div>
  );
}
