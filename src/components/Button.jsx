import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  href = "",
  target = "_blank",
  to = '',
  className = "",
  onClick = () => {},
}) => {
  return (
    <>
      {href && (
        <a className={`w-full lg:w-auto rounded p-2 text-white font-semibold bg-indigo-700 ${className}`} href={href} target={target}>
          {children}
        </a>
      )}
      {to && <Link className={`w-full lg:w-auto rounded p-2 text-white font-semibold bg-indigo-700 ${className}`} to={to}>{children}</Link>}
      {!to && !href && (
        <button className={`w-full lg:w-auto rounded p-2 text-white font-semibold bg-indigo-700 ${className}`} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
