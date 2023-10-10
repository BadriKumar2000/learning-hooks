import React, { useEffect, useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);
  useEffect(() => {
    // the input feild should be foused when page opens
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default InputFocus;
