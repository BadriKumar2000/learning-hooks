import React, { useState } from "react";

const initialCount = 0;

function ChangeCount() {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase Count
      </button>
      <button onClick={() => setCount(initialCount)}>Reset Count</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrease Count
      </button>
      <h2>{count}</h2>
    </div>
  );
}

export default ChangeCount;
