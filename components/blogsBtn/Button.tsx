"use client";
import Link from "next/link";
import React, { useState } from "react";

function Button({ blogId }: { blogId: number }) {
  let [blogNum, setBlogNum] = useState<number>();
  console.log(blogId);
  return (
    <div className="flex justify-center">
      <Link href={`/blogs/${blogId}`}>
        <button
          onClick={() => setBlogNum(blogId)}
          className="rounded-lg bg-black px-5 py-2 font-medium text-white transition hover:bg-gray-800 active:scale-95"
        >
          Read Blog!
        </button>
      </Link>
    </div>
  );
}

export default Button;
