import React from "react";
import ContextComponent from "./components/UseContext/ContextComponent";
import "./App.css";
import ReducerHookCounterOne from "./components/useReducer/ReducerHookCounterOne";

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
      <ReducerHookCounterOne />
    </div>
  );
}

export default App;
