export const dynamic = "force-dynamic";

import LikeBtn from "@/components/blogsBtn/LikeBtn";
import Link from "next/link";
import React from "react";
type blogType = Promise<{ blogid: string }>;
interface userBlog {
  _id: number;
  title: string;
}

async function singleBlog({ params }: { params: blogType }) {
  let { blogid } = await params;
  console.log("blogId here", blogid);
  let singleBlog = await fetch(
    `https://blog-app-nextjs-ssqw.vercel.app/api/blog/${blogid}`,
    {
      cache: "no-cache",
    },
  );
  let response: userBlog = await singleBlog.json();
  console.log("blogId json", response);
  //? resnponsived for all sizes
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-3 py-4 sm:px-6 md:px-8 lg:px-10">
      <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-4 shadow-lg sm:max-w-xl sm:p-6 md:max-w-2xl md:p-8 lg:max-w-4xl">
        <span className="inline-block rounded-full bg-black px-3 py-1 text-xs text-white">
          Blog Detail
        </span>

        <h1 className="mt-4 break-words text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
          {response.title}
        </h1>

        <div className="mt-6 rounded-lg bg-gray-100 p-3 sm:p-4">
          <p className="text-sm text-gray-500">Blog ID</p>
          <p className="text-base font-semibold text-gray-800 sm:text-lg">
            #{response._id}
          </p>
        </div>

        <p className="mt-6 break-words text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
          {response.title}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/blogs">
            <button className="w-full rounded-lg bg-black px-5 py-2 text-white transition hover:bg-gray-800 active:scale-95 sm:w-auto">
              Back
            </button>
          </Link>

          <div className="flex justify-center sm:justify-end">
            <LikeBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default singleBlog;
