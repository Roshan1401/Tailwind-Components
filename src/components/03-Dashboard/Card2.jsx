import React from "react";

function Card2({ src, title, description }) {
  return (
    <div className="flex flex-col items-start gap-3 rounded-lg border border-gray-200 bg-white px-5 py-6 shadow-sm transition hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
        <img src={src} alt="" className="size-10 rounded-lg" />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default Card2;
