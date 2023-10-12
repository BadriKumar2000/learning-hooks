import { useState } from "react";

function useInput(initialValue) {
  const [value, setterFunction] = useState(initialValue);
  const reset = () => {
    setterFunction(initialValue);
  };
  const bind = {
    value,
    onChange: (e) => {
      setterFunction(e.target.value);
    },
  };
  return [value, reset, bind];
}

export default useInput;
