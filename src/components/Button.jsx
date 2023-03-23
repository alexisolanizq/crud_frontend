import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  isAnimated = false,
  children,
  href = "",
  target = "_blank",
  to = "",
  className = "",
  onClick = () => {},
}) => {
  const classAnimated = isAnimated
    ? "transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-110 hover:bg-indigo-800 duration-200" : '';
  return (
    <>
      {href && (
        <a
          className={`w-full lg:w-auto rounded p-2 text-white font-semibold bg-indigo-700 ${className} ${classAnimated}`}
          href={href}
          target={target}
        >
          {children}
        </a>
      )}
      {to && (
        <Link
          className={`w-full lg:w-auto rounded p-2 text-white font-semibold bg-indigo-700 ${className} ${classAnimated}`}
          to={to}
        >
          {children}
        </Link>
      )}
      {!to && !href && (
        <button
          className={`w-full lg:w-auto rounded p-2 text-white font-semibold bg-indigo-700 ${className} ${classAnimated}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
