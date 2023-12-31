import React, { useState, useEffect } from "react";

function CountHookOne() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        {count} times
      </button>
    </div>
  );
}

export default CountHookOne;
