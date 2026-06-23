// Top pe add karo — Static page hai yeh!
export const dynamic = "force-dynamic";
import React from "react";
import Button from "@/components/blogsBtn/Button";
import BlogDelBtn from "@/components/blogsBtn/BlogDelBtn";
import Search from "@/components/blogs/Search";
import Filtring from "@/components/blogs/Filtring";

interface blogsAll {
  _id: string;
  title: string;
}
type blog = {
  _id: string;
  title: string;
};
async function blogsHomePage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  let { search } = await searchParams;
  console.log("clear", search);

  let blogs: blogsAll[] = [];
  let isTyping: boolean = false;
  // console.log(isTyping);

  try {
    let response = await fetch(
      "https://blog-app-nextjs-ssqw.vercel.app/api/blog",
      { cache: "no-cache" },
    );
    blogs = await response.json();
    // console.log("blogs are here ", blogs);
  } catch (error) {
    console.log("this side is error", error);
  }

  let filtered: blog[] = blogs.filter((item) =>
    item.title.toLocaleLowerCase().includes(`${search}`),
  );

  if (search == "short") {
    filtered = blogs.filter((item) => item.title.length < 5);
    console.log(filtered);
  }
  if (search == "long") {
    filtered = blogs.filter((item) => item.title.length > 20);
  }
  // console.log(filtered);

  console.log(blogs);

  //? resnponsived for all sizes
  return (
    <div className="px-3 py-4 sm:px-6 md:px-8 lg:px-10">
      {/* Header */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-black to-gray-800 p-4 text-white shadow-lg sm:p-6 md:p-8">
        <h1 className="flex flex-col gap-2 text-2xl font-bold sm:flex-row sm:items-center sm:text-3xl md:text-4xl">
          All Blogs
          <span className="text-xs font-medium text-gray-300 sm:ml-3 sm:text-sm">
            Collection
          </span>
        </h1>

        <p className="mt-3 text-sm text-gray-300 sm:text-base">
          Explore all latest posts and updates in one place.
        </p>
      </div>
      <Filtring />
      {/* filter component render */}
      <Search />
      {/* Blog List */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {filtered.map((item, index) => {
          return (
            <div
              key={item._id}
              className="group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:bg-amber-100 hover:shadow-lg sm:p-5 md:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-full">
                  <span className="inline-block rounded-full bg-gray-900 px-3 py-1 text-xs text-white">
                    Blog {index + 1}
                  </span>

                  <h2 className="mt-3 break-words text-lg font-semibold text-gray-900 group-hover:text-black sm:text-xl md:text-2xl">
                    {item.title}
                  </h2>

                  <p className="mt-2 line-clamp-2 text-sm text-gray-500 sm:text-base">
                    Click below to read full blog details and explore more
                    content.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex justify-center sm:justify-between">
                <Button blogId={item._id} />
                <BlogDelBtn blogs={blogs} blogId={item._id} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default blogsHomePage;
