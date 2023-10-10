import React, { useState, useEffect, useRef } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  let intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      <p>Timer- {timer}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Interval
      </button>
    </div>
  );
}

export default Timer;
