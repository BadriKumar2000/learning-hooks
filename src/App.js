import React from "react";
import ContextComponent from "./components/UseContext/ContextComponent";
import "./App.css";
import ReducerHookCounterOne from "./components/useReducer/ReducerHookCounterOne";
import ReducerHookCounterTwo from "./components/useReducer/ReducerHookCounterTwo";
import ReducerHookCounterThree from "./components/useReducer/ReducerHookCounterThree";
import FetchingDataOne from "./components/useReducer/FetchingDataOne";

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
      <FetchingDataOne />
    </div>
  );
}

export default App;
