import React from "react";

function IntegrationItem({
  src,
  circleSrc,
  title,
  category,
  updatedTime,
  onEdit,
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-b-neutral-200 px-6 py-6">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-15 w-15 items-center justify-center rounded-full bg-neutral-100`}
        >
          <img
            src={src}
            alt=""
            className="h-15 w-15 rounded-full object-cover"
          />
        </div>
        <div className="flex gap-4 rounded-4xl border border-neutral-200 px-3 py-1 shadow-sm">
          <h4 className="text-xl font-bold">{title}</h4>
          <span>-</span>
          <span className="text-lg text-neutral-400">{category}</span>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <span className="text-lg font-normal text-neutral-500">
          {updatedTime}
        </span>
        <div className="h-10 w-10 rounded-full">
          <img src={circleSrc} alt="" className="size-10 rounded-full" />
        </div>
        <button
          onClick={onEdit}
          className="rounded-4xl border border-neutral-200 px-5 py-2 text-lg text-black"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default IntegrationItem;
