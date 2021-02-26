import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import NumberBtn from "../components/NumberBtn";
import SignBtn from "../components/SignBtn";
import AcBtn from "../components/AcBtn";

const mapDispatchToProps = dispatch => ({
  inputNum: num => dispatch(actions.inputNumber(num)),
  addNum: () => dispatch(actions.addNumber()),
  subNum: () => dispatch(actions.subNumber()),
  multiNum: () => dispatch(actions.multiNumber()),
  diviNum: () => dispatch(actions.diviNumber()),
  countNum: () => dispatch(actions.countNumber()),
  clearNum: () => dispatch(actions.clearNumber())
});

const ClickBtn = connect(
  null, // 不會因為資料的改變而有變化，所以不用傳入 mapStateToProps，用 null。
  mapDispatchToProps
)(({ inputNum, addNum, subNum, multiNum, diviNum, countNum, clearNum }) => (
  <div className="calculate__board">
    <div className="calculate__board--rows">
      <AcBtn
        sign="AC"
        onClick={e => {
          e.preventDefault();
          clearNum();
        }}
      />
    </div>
    <div className="calculate__board--rows">
      <NumberBtn
        number={7}
        onClick={e => {
          e.preventDefault();
          inputNum(7);
        }}
      />
      <NumberBtn
        number={8}
        onClick={e => {
          e.preventDefault();
          inputNum(8);
        }}
      />
      <NumberBtn
        number={9}
        onClick={e => {
          e.preventDefault();
          inputNum(9);
        }}
      />
      <SignBtn
        sign="+"
        onClick={e => {
          e.preventDefault();
          addNum();
        }}
      />
    </div>
    <div className="calculate__board--rows">
      <NumberBtn
        number={4}
        onClick={e => {
          e.preventDefault();
          inputNum(4);
        }}
      />
      <NumberBtn
        number={5}
        onClick={e => {
          e.preventDefault();
          inputNum(5);
        }}
      />
      <NumberBtn
        number={6}
        onClick={e => {
          e.preventDefault();
          inputNum(6);
        }}
      />
      <SignBtn
        sign="-"
        onClick={e => {
          e.preventDefault();
          subNum();
        }}
      />
    </div>
    <div className="calculate__board--rows">
      <NumberBtn
        number={1}
        onClick={e => {
          e.preventDefault();
          inputNum(1);
        }}
      />
      <NumberBtn
        number={2}
        onClick={e => {
          e.preventDefault();
          inputNum(2);
        }}
      />
      <NumberBtn
        number={3}
        onClick={e => {
          e.preventDefault();
          inputNum(3);
        }}
      />
      <SignBtn
        sign="x"
        onClick={e => {
          e.preventDefault();
          multiNum();
        }}
      />
    </div>
    <div className="calculate__board--rows">
      <NumberBtn
        number={0}
        onClick={e => {
          e.preventDefault();
          inputNum(0);
        }}
      />
      <NumberBtn
        number="."
        onClick={e => {
          e.preventDefault();
          inputNum(".");
        }}
      />
      <SignBtn
        sign="="
        onClick={e => {
          e.preventDefault();
          countNum();
        }}
      />
      <SignBtn
        sign="÷"
        onClick={e => {
          e.preventDefault();
          diviNum();
        }}
      />
    </div>
  </div>
));

export default ClickBtn;
