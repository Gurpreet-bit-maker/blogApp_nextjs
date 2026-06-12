"use client";

export default function Error() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-red-50 px-4">
      <div className="rounded-xl border border-red-200 bg-white p-6 text-center shadow-md">
        <h2 className="text-2xl font-bold text-red-600">Oops!</h2>
        <p className="mt-2 text-gray-600">File not found!</p>

        <button
          onClick={() => window.location.reload()}
          className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
