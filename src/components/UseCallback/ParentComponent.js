import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count count={age} type={"Age"} />
      <Button text={"Increase Age"} handleClick={incrementAge} />
      <Count count={salary} type={"Salary"} />
      <Button text={"Increase Salary"} handleClick={incrementSalary} />
    </div>
  );
}

export default ParentComponent;
