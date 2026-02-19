import React from "react";

function SubHeading({ children, className }) {
  return (
    <p
      className={`${className} max-w-xl py-1 text-neutral-400 md:text-lg dark:text-neutral-600`}
    >
      {children}
    </p>
  );
}

export default SubHeading;
