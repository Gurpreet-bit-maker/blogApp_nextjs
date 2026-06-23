import React from "react";
import Link from "next/link";
function Navbar() {
  //? resnponsived for all sizes

  return (
    <div className="sticky top-0 z-50 bg-gray-900 shadow-md">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-2 py-3 sm:justify-between">
          <div className="mb-2 text-lg font-bold text-white sm:mb-0">
            Blog App
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <li className="list-none">
              <Link
                href="/"
                className="block rounded-lg px-3 py-2 text-sm text-white transition hover:bg-gray-700 sm:px-4"
              >
                Home
              </Link>
            </li>

            <li className="list-none">
              <Link
                href="/blogs"
                className="block rounded-lg px-3 py-2 text-sm text-white transition hover:bg-gray-700 sm:px-4"
              >
                Blogs
              </Link>
            </li>

            <li className="list-none">
              <Link
                href="/add"
                className="block rounded-lg bg-blue-600 px-3 py-2 text-sm text-white transition hover:bg-blue-700 sm:px-4"
              >
                Add Blog
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
