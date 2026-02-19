import React from "react";

function SectionHeader({ title, description, showLearnMore = true }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-medium">{title}</h1>
      <p className="text-gray-600">
        {description}
        {showLearnMore && (
          <>
            {" "}
            <a href="#" className="text-neutral-400 hover:underline">
              Learn more
            </a>
            .
          </>
        )}
      </p>
    </div>
  );
}

export default SectionHeader;
