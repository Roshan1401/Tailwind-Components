import React from "react";

function Heading({ children, className, tag: Tag = "h2" || "h1" }) {
  return (
    <Tag
      className={`${className} text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl`}
    >
      {children}
    </Tag>
  );
}

export default Heading;
