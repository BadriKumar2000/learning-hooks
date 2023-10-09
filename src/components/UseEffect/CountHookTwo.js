import React, { useState, useEffect } from "react";

function CountHookTwo() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log("useEffect called");
    document.title = `You Clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        {count} times
      </button>
    </div>
  );
}

export default CountHookTwo;
