"use client";

import React, { useState } from "react";

function AddBlog() {
  // blog sending to backend
  let [blogtext, setBlogtext] = useState<string>("");
  let [img, setImg] = useState<string | null>(null);
  
  let sending = async () => {
    // formData.append("avtar", img);
    // if (blogtext == "") return;
    try {
      let sendingBlog = await fetch("/api/blog", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title: blogtext }),
      });
      let response = await sendingBlog.json();
      console.log(response);
      setBlogtext("");
    } catch (error) {
      console.log("blog not saved");
    }
  };
  console.log(blogtext);
  //? resnponsived for all sizes
  return (
    <div className="px-3 py-4 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-4 shadow-lg sm:max-w-xl sm:p-6 md:max-w-2xl md:p-8">
        <div className="mb-6">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            New Post
          </span>

          <h2 className="mt-3 text-2xl font-bold text-gray-800 sm:text-3xl">
            Create Blog
          </h2>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Share your thoughts and publish a new blog post.
          </p>
        </div>

        <form action="" method="post" className="space-y-4">
          <textarea
            name="blog"
            placeholder="Write your blog..."
            value={blogtext}
            className="h-40 w-full resize-none rounded-xl border border-gray-300 p-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:h-48 sm:p-4 sm:text-base md:h-56"
            onChange={(e) => setBlogtext(e.target.value)}
          ></textarea>
          <input type="file" name="avtar" placeholder="select file" />
          <button
            type="button"
            className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95 sm:text-base"
            onClick={sending}
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBlog;
