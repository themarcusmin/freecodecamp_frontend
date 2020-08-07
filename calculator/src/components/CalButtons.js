import React from "react";

const BtnKeys = [
  "AC",
  "/",
  "*",
  7,
  8,
  9,
  "-",
  4,
  5,
  6,
  "+",
  1,
  2,
  3,
  "=",
  0,
  "."
];

function CalButtons(props) {
  const { onClick } = props;
  const signs = ["/", "*", "-", "+"];
  const AllBtns = BtnKeys.map(item =>
    signs.includes(item) ? (
      <button key={item} onClick={onClick} className="sign" value={item}>
        {item === "*" ? "x" : item}
      </button>
    ) : (
      <button key={item} onClick={onClick} value={item}>
        {item}
      </button>
    )
  );
  return <div className="placegrid">{AllBtns}</div>;
}

export default CalButtons;
