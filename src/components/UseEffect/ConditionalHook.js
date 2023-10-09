import React, { useState } from "react";
import MouseMove from "./MouseMove";

function ConditionalHook() {
  const [value, setValue] = useState(true);
  return (
    <div>
      <button onClick={() => setValue((prevValue) => !prevValue)}>
        Toggle Button
      </button>
      {value && <MouseMove />}
    </div>
  );
}

export default ConditionalHook;
