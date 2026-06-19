import React from "react";

interface blogsAll {
  _id: string;
  title: string;
}

function BlogDelBtn({ blogId, blogs }: { blogId: string; blogs: blogsAll[] }) {
  console.log("blogDeleteBtn", blogId);

  let deleteBlog = async () => {
    let deleted = await fetch(
      `https://blog-app-nextjs-ssqw.vercel.app/api/blog/${blogId}`,
      { method: "DELETE" },
    );
    console.log(deleted);
  };
  return (
    <div>
      <button  className="rounded-lg bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-gray-800 active:scale-95">
        Delete
      </button>
    </div>
  );
}

export default BlogDelBtn;
