import React from "react";

const SignBtn = ({ sign, onClick }) => (
  <button className="sign__btn" onClick={onClick}>
    <div>{sign}</div>
  </button>
);

export default SignBtn;
