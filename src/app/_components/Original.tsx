"use client";

import { useDateContext } from "../_context";

export function Original() {
  const { date } = useDateContext();

  return (
    <div className="flex items-center  justify-between p-5 border rounded-lg border-gray-300">
      <h2 className="text-lg font-bold">オリジナル</h2>
      <p>{date}</p>
    </div>
  );
}
