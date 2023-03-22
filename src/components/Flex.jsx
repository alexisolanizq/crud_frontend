import React from "react";

const Flex = ({
  className = "",
  isWrap = false,
  isVertical = false,
  align = "center",
  justify = "between",
  children,
}) => {
  const classWrap = isWrap && "flex-wrap";
  const classDirection = isVertical ? "flex-col" : "flex-row";
  return (
    <div
      className={`flex gap-0 lg:gap-5 flex-col lg:flex-row justify-${justify} items-${align} ${classDirection} ${classWrap} ${className}`}
    >
      {children}
    </div>
  );
};

export default Flex;
