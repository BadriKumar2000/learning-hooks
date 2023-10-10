import React, { useState, useMemo } from "react";

function CounterOne() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const increaseOne = () => {
    setCountOne(countOne + 1);
  };
  const increaseTwo = () => {
    setCountTwo(countTwo + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000) {
      i++;
    }
    return countOne % 2 === 0;
  }, [countOne]);
  return (
    <div>
      <div>
        <button onClick={increaseOne}>CountOne {countOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={increaseTwo}>CountTwo {countTwo}</button>
      </div>
    </div>
  );
}

export default CounterOne;
