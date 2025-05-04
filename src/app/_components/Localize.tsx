"use client";

import { useDateContext } from "../_contexts";

export function Localize() {
  const { localizedDate } = useDateContext();

  return (
    <div className="flex items-center  justify-between p-5 border rounded-lg border-gray-300">
      <h2 className="text-lg font-bold">ローカライズ形式</h2>
      <p>{localizedDate}</p>
    </div>
  );
}
