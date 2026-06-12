"use client";
import React, { useEffect, useState, useRef } from "react";

function LikeBtn() {
  let [isliked, setliked] = useState<boolean | null>(false);
  // set like in localstorage
  useEffect(() => {
    let getData = localStorage.getItem("clicked");
    setliked(getData === "true");
  }, []);

  let clickBtn = () => {
    //! note
    setliked((prev) => {
      let newValue = !prev;
      if (newValue) {
        localStorage.setItem("clicked", "true");
      } else {
        localStorage.removeItem("clicked");
      }
      return newValue;
    });
  };

  return (
    <div onClick={clickBtn} className="flex gap-4 flex-col justify-end">
      {/* Red background heart */}
      {isliked ? (
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white transition hover:bg-red-600 active:scale-90">
          ♥
        </button>
      ) : (
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-red-500 transition hover:bg-gray-100 active:scale-90">
          ♥
        </button>
      )}
    </div>
  );
}

export default LikeBtn;
