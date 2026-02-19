import React from "react";

function Card({ src, title, description }) {
  return (
    <div className="w-64 rounded-lg border border-white/20 bg-white/12 px-5 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.25)] backdrop-blur">
      <div className="flex flex-col items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg">
          <img src={src} alt="" className="size-10 rounded-lg" />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <p className="text-xs text-white/80">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
