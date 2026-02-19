import React from "react";
import { Link } from "react-router-dom";

function Button({ children, href, className, onClick, ...props }) {
  if (href) {
    return (
      <Link
        to={href}
        className={`rounded-xl px-4 py-2 font-medium ${className || "transition-colors duration-200"}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-4 py-2 font-medium ${className || "transition-colors duration-200"}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
