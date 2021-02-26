import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import calculateReducer from "../HW/HW2/src/reducers/reducers";
import ClickBtn from "../HW/HW2/src/containers/ClickBtn";
import ViewNumber from "../HW/HW2/src/containers/ViewNumber";

import "./style/style.css";

const Style = {
  display: "inline-block",
  border: "3px solid rgb(66, 65, 65)",
  padding: "50px",
  boxShadow: "10px 5px 10px rgb(80, 80, 80)"
};
function App() {
  const store = createStore(calculateReducer);
  return (
    <div className="calculate__app">
      <Provider store={store}>
        <div style={Style}>
          <ViewNumber />
          <ClickBtn />
        </div>
      </Provider>
    </div>
  );
}

export default App;
