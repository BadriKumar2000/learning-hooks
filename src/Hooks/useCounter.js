import React, { useReducer } from "react";

function useCounter(reducer, initialState) {
  const [count, dispatch] = useReducer(reducer, initialState);
  return [count, dispatch];
}

export default useCounter;
