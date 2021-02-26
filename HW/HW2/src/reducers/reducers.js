import { combineReducers } from "redux";
import * as actionTypes from "../actions/actionsTypes";

const initState = {
  frontNum: "", // 被加數、被減數、被乘數、被除數
  backNum: "", // 加數、減數、乘數、除數
  countType: null // 運算方式
};

//按等於的計算 or 計算
const calculateNumber = (state = initState) => {
  let answer = "0";
  state.frontNum = parseFloat(state.frontNum);
  state.backNum = parseFloat(state.backNum);
  //console.log(state.frontNum);
  //console.log(state.backNum);
  console.log(state);
  switch (state.countType) {
    case actionTypes.ADD:
      answer = state.frontNum + state.backNum;
      console.log(answer);
      break;
    case actionTypes.SUB:
      answer = state.frontNum - state.backNum;
      break;
    case actionTypes.MULTI:
      answer = state.frontNum * state.backNum;
      break;
    case actionTypes.DIVI:
      answer = state.frontNum / state.backNum;
      break;
    default:
      return;
  }
  return answer;
};

const calculator = (state = initState, action) => {
  // console.log(state.frontNum, state.backNum);
  //console.log(state);

  switch (action.type) {
    //輸入數字
    case actionTypes.NUM:
      if (action.num === "." && state.backNum.includes(".")) return;
      console.log(state);
      return Object.assign({}, state, {
        backNum: state.backNum.toString() + action.num.toString()
      });
    //按下加減乘除
    case actionTypes.ADD:
    case actionTypes.SUB:
    case actionTypes.MULTI:
    case actionTypes.DIVI:
      if (state.backNum === "") return;
      return {
        frontNum: parseFloat(state.backNum),
        backNum: "",
        countType: action.type
      };

    // 清除
    case actionTypes.CLEAR:
      return Object.assign({}, state, {
        frontNum: "",
        backNum: "",
        countType: null
      });
    // 按下等於
    case actionTypes.CALCULATE:
      console.log(state);
      return Object.assign({
        frontNum: "",
        backNum: calculateNumber(state),
        countType: null
      });
    default:
      return state;
  }
};

const calculateReducer = combineReducers({
  calculator
});

export default calculateReducer;
