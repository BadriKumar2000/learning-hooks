import React from "react";
import useCounterTwo from "../../Hooks/useCounterTwo";

function CountTwo() {
  const [count, increment, decrement, reset] = useCounterTwo(10, 3);
  return (
    <div>
      <h2>Count- {count}</h2>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default CountTwo;
