import React from "react";

function Count({ type, count }) {
  console.log(`re-rendered ${type}`);
  return <div>{count}</div>;
}

export default React.memo(Count);
