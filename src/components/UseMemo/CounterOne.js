import React, { useState } from "react";

function CounterOne() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const increaseOne = () => {
    setCountOne(countOne + 1);
  };
  const increaseTwo = () => {
    setCountTwo(countTwo + 1);
  };
  return (
    <div>
      <div>
        <button onClick={increaseOne}>CountOne {countOne}</button>
      </div>
      <div>
        <button onClick={increaseTwo}>CountTwo {countTwo}</button>
      </div>
    </div>
  );
}

export default CounterOne;
