import React from "react";

const Flex = ({
  className = "",
  isWrap = false,
  isVertical = false,
  align = "center",
  justify = "between",
  gap = true,
  children,
}) => {
  const classWrap = isWrap && "flex-wrap";
  const classDirection = isVertical ? "flex-col" : "flex-col lg:flex-row";
  const classGap = gap ? "gap-0 lg:gap-5" : "gap-0";
  return (
    <div
      className={`flex ${classGap} justify-${justify} items-${align} ${classDirection} ${classWrap} ${className}`}
    >
      {children}
    </div>
  );
};

export default Flex;
