import React, { useState, useEffect } from "react";

function MouseMove() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const changeMouseCoordinates = (event) => {
    setX(event.clientX);
    setY(event.clientY);
  };
  useEffect(() => {
    console.log("useEffect is called");
    window.addEventListener("mousemove", changeMouseCoordinates);
    return () => {
      window.removeEventListener("mousemove", changeMouseCoordinates);
    };
  });
  return <div>{`X-${x} Y-${y}`}</div>;
}

export default MouseMove;
