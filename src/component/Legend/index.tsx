import React from "react";

interface Props {
  type: "a" | "b" | "c";
  text: string;
}

const Legend = ({ type, text }: Props) => {
  return (
    <p className="legend flex items-center !mb-2 gap-3">
      <span className={`type-${type}`}></span> {text}
    </p>
  );
};

export default Legend;
