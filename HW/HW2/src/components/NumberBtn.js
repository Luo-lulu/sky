import React from "react";

const NumberBtn = ({ number, onClick }) => (
  <button className="number__btn" onClick={onClick}>
    <div>{number}</div>
  </button>
);

export default NumberBtn;
