import React from "react";

function Card() {
  return (
    <div className="relative z-100 overflow-hidden rounded-4xl bg-white p-px">
      <div className="[animation-duration:2s][animation-timing-function:linear] absolute inset-0 z-0 h-full w-full scale-500 animate-spin bg-[conic-gradient(from_0deg_at_center,transparent,rgb(59_130_246)_20%,transparent_30%)]"></div>
      <div className="[animation-duration:2s][animation-timing-function:linear] absolute inset-0 z-0 h-full w-full scale-500 animate-spin bg-[conic-gradient(from_0deg_at_center,transparent,red_20%,transparent_30%)] [animation-delay:0.23s]"></div>
      <div className="relative z-30 rounded-[35px] bg-white p-5">
        <div className="relative flex w-75 flex-col items-center justify-center gap-2 overflow-hidden rounded-4xl bg-neutral-100 pt-3 text-sm">
          <h1 className="text-2xl font-bold">Sienna Brooks</h1>
          <span>connecting</span>

          <div className="relative w-full">
            <img
              src="./image.png"
              className="mt-5 h-full w-full scale-100 bg-transparent object-cover object-[center_30%]"
              alt=""
            />
            <div
              className="absolute right-0 bottom-0 left-0 h-50 mask-[linear-gradient(to_top,black,transparent)]"
              style={{ backdropFilter: "blur(10px)" }}
            ></div>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between gap-5">
          <div className="flex items-center justify-center gap-2">
            <img src="/image.png" alt="" className="size-8 rounded-full" />
            <div className="flex flex-col gap-0">
              <span className="text-sm font-bold text-neutral-500">@edith</span>
              <span className="text-[10px] text-neutral-500">12m ago</span>
            </div>
          </div>
          <button className="my-5 rounded-2xl bg-white px-4 py-2">
            <span>+</span>
            Add member
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
