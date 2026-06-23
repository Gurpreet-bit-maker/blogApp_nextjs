"use client";
import React from "react";
import { useRouter } from "next/navigation";
function Filtring() {
  let router = useRouter();
  let selectingValue = (value: string) => {
    router.replace(`/blogs?search=${value}`);
  };
  return (
    <div className="rounded-md border border-gray-200 bg-white px-2 py-1 shadow-sm w-20">
      <select
        onChange={(e) => selectingValue(e.target.value)}
        className="bg-transparent text-sm text-gray-700 outline-none"
      >
        <option value="">Filter</option>
        <option value="short">Short</option>
        <option value="long">Long</option>
      </select>
    </div>
  );
}

export default Filtring;
