import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-gray-50 px-6">
      <div className="max-w-3xl text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-900">
          Welcome to My Blog
        </h1>

        <p className="mb-8 text-lg text-gray-600">
          Discover articles about web development, Next.js, React, and modern
          programming concepts.
        </p>

        <div className="flex justify-center gap-4">
          <button className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800">
            Explore Blogs
          </button>

          <button className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}
