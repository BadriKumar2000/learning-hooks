import React from "react";

function Button({ handleClick, text }) {
  console.log(`re-rendered button - ${text}`);
  return <button onClick={handleClick}>{text}</button>;
}

export default Button;
