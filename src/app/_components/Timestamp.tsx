"use client";

import { useDateContext } from "../_contexts";

export function Timestamp() {
  const { timestamp } = useDateContext();

  return (
    <div className="flex items-center  justify-between p-5 border rounded-lg border-gray-300">
      <h2 className="text-lg font-bold">タイムスタンプ</h2>
      <p>{timestamp}</p>
    </div>
  );
}
