import React from "react";
import ContextComponent from "./components/UseContext/ContextComponent";
import "./App.css";
import ReducerHookCounterOne from "./components/useReducer/ReducerHookCounterOne";
import ReducerHookCounterTwo from "./components/useReducer/ReducerHookCounterTwo";
import ReducerHookCounterThree from "./components/useReducer/ReducerHookCounterThree";
import FetchingDataOne from "./components/useReducer/FetchingDataOne";
import FetchingDataTwo from "./components/useReducer/FetchingDataTwo";
import ParentComponent from "./components/UseCallback/ParentComponent";
import CounterOne from "./components/UseMemo/CounterOne";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={"Badri"}>
        <ChannelContext.Provider value={"Code Invosion"}>
          <ContextComponent />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <ReducerHookCounterOne /> */}
      {/* <ReducerHookCounterTwo /> */}
      {/* <ReducerHookCounterThree /> */}
      {/* <FetchingDataOne /> */}
      {/* <FetchingDataTwo /> */}
      {/* <ParentComponent /> */}
      <CounterOne />
    </div>
  );
}

export default App;
