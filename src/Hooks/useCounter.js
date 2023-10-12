import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function useCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return [count, dispatch];
}

export default useCounter;
