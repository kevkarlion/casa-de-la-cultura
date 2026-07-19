import React from "react";

const WEEK_DAYS = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"];
const ROWS = 5;

export default function Loading() {
  return (
    <main className="bg-white text-black min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* header skeleton */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="h-10 w-80 rounded bg-neutral-200 animate-pulse" />
          <div className="flex gap-2">
            <div className="w-32 h-10 rounded bg-neutral-200 animate-pulse" />
            <div className="w-36 h-10 rounded bg-neutral-200 animate-pulse" />
          </div>
        </div>

        {/* weekday header */}
        <div className="hidden md:grid md:grid-cols-7 gap-2 text-center mb-1 font-semibold">
          {WEEK_DAYS.map((wd) => (
            <div key={wd}>{wd}</div>
          ))}
        </div>

        {/* skeleton grid */}
        <div className="grid md:grid-cols-7 gap-2 mt-2 flex-col md:flex-none">
          {Array.from({ length: 31 }).map((_, i) => (
            <div
              key={i}
              className="h-64 sm:h-72 md:h-80 rounded-md bg-neutral-100 border border-neutral-200 animate-pulse p-2"
            >
              <div className="h-4 w-12 bg-neutral-300 rounded mb-6" />
              <div className="flex flex-col gap-2 mt-8">
                <div className="h-4 bg-neutral-200 rounded w-3/4" />
                <div className="h-3 bg-neutral-200 rounded w-1/2" />
                <div className="flex gap-1 mt-1">
                  <div className="h-5 w-10 bg-neutral-200 rounded" />
                  <div className="h-5 w-10 bg-neutral-200 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
