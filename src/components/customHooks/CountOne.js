import React from "react";
import useCounter from "../../Hooks/useCounter";

function CountOne() {
  const [count, dispatch] = useCounter();
  return (
    <div>
      <h2>Count- {count}</h2>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CountOne;
