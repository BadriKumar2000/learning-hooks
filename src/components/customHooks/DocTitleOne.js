import React, { useState, useEffect } from "react";

function DocTitleOne() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Your Count times- ${count}`;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count - {count}</button>
    </div>
  );
}

export default DocTitleOne;
