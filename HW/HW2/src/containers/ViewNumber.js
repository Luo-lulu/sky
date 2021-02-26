import React from "react";
import { connect } from "react-redux";

const NumberBlock = ({ num }) => {
  return (
    <div className="calculate__view">
      <div>{num}</div>
    </div>
  );
};

// 回傳需要顯示的資料。
const mapStateToProps = state => ({
  num: state.calculator.backNum
});

const ViewNumber = connect(mapStateToProps)(NumberBlock);

export default ViewNumber;
