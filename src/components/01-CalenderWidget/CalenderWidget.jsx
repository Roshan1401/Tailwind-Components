import React from "react";

function CalenderWidget() {
  return (
    <div className="mx-auto flex h-screen items-center justify-center bg-[linear-gradient(to_bottom,#2f82fc,#0a3a7a,#0a0a0f,#000000)]">
      <div className="group inline-flex h-70 cursor-pointer overflow-hidden rounded-3xl border border-gray-700 bg-[linear-gradient(to_right,#292929,#000000)] px-3 py-3 transition-all duration-500 group-hover:gap-3 hover:gap-6">
        <div className="flex w-50 flex-col justify-between rounded-2xl border border-gray-800 bg-[linear-gradient(to_bottom,#000000,#0a0a0f,#000000,#123a75,#8cbcff)] py-4 pl-5 text-white">
          <h1 className="text-4xl font-bold">Oct 30</h1>
          <div className="flex flex-col text-xl font-bold">
            <span>Thursday</span>
            <span>6 Evenets</span>
          </div>
        </div>
        <div className="max-h-0 max-w-0 translate-x-full overflow-hidden py-0 text-gray-300 opacity-0 transition-all duration-500 group-hover:max-h-64 group-hover:max-w-64 group-hover:translate-x-0 group-hover:py-1 group-hover:pr-5 group-hover:opacity-100">
          <h2 className="mb-3">UPCOMING</h2>
          <div className="flex flex-col gap-3">
            <div className="relative flex gap-2 rounded-xl bg-emerald-950/40 px-3 py-2">
              <div className="h-12 w-1 rounded-2xl bg-green-300"></div>
              <div className="flex flex-col">
                <span>Daily Metting</span>
                <span className="text-sm text-gray-600">10:00 - 10:30</span>
              </div>
            </div>
            <div className="relative flex gap-2 rounded-xl bg-sky-950/40 px-3 py-2">
              <div className="h-12 w-1 rounded-2xl bg-blue-300"></div>
              <div className="flex flex-col">
                <span>Daily Metting</span>
                <span className="text-sm text-gray-600">10:00 - 10:30</span>
              </div>
            </div>
            <div className="relative flex gap-2 rounded-xl bg-amber-950/40 px-3 py-2">
              <div className="h-12 w-1 rounded-2xl bg-yellow-300"></div>
              <div className="flex flex-col">
                <span>Daily Metting</span>
                <span className="text-sm text-gray-600">10:00 - 10:30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalenderWidget;
