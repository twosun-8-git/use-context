"use client";

import { useDateContext } from "../_context";

export function Iso() {
  const { isoDate } = useDateContext();

  return (
    <div className="flex items-center  justify-between p-5 border rounded-lg border-gray-300">
      <h2 className="text-lg font-bold">ISO形式</h2>
      <p>{isoDate}</p>
    </div>
  );
}
