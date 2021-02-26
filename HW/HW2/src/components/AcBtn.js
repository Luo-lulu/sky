import React from "react";
const AcBtn = ({ sign, onClick }) => (
  <button className="ac__btn" onClick={onClick}>
    <div>{sign}</div>
  </button>
);

export default AcBtn;
