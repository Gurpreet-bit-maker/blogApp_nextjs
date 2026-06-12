import AddBlog from "@/components/blogs/AddBlog";
import React from "react";

function addBlog() {
  return (
    <div className="mx-auto w-full max-w-3xl px-3 py-4 sm:px-6">
      <div className="mb-6 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white shadow-md sm:p-6">
        <h1 className="text-xl font-bold sm:text-2xl">Add Single Blog</h1>

        <p className="mt-2 text-sm text-blue-100">
          Create and publish your new blog post
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <AddBlog />
      </div>
    </div>
  );
}

export default addBlog;
