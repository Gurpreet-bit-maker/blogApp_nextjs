"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Search() {
  //   let [inputValue, setInputValue] = useState<string | null>(null);
  //   if (inputValue?.length == 0) {
  //     isTyping = true;
  //   }

  let router = useRouter();

  let inputValueFunc = (value: string) => {
    router.replace(`/blogs?search=${value}`);
  };

  return (
    <div className="flex items-center justify-center mt-10 mb-5">
      <div className="flex w-full max-w-md overflow-hidden rounded-lg border border-gray-300 shadow-md">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full px-4 py-3 outline-none"
          onChange={(e) => inputValueFunc(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
