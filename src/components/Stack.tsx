import React from "react";

interface Props {
  children: React.ReactNode;
  spacing: number;
  direction: "row" | "column";
  wrap: boolean;
}

const Stack = ({
  children,
  spacing = 2,
  direction = "row",
  wrap = false,
}: Props) => {

  return (
    <div
      style={{
        display: "flex",
        gap: `${spacing * 0.25}rem`,
        flexWrap: wrap ? "wrap" : "nowrap",
        flexDirection: direction,
      }}
    >
      {children}
    </div>
  );
};

export default Stack;
