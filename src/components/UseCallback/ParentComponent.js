import React, { useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);
  const incrementAge = () => {
    setAge(age + 1);
  };
  const incrementSalary = () => {
    setSalary(salary + 1000);
  };
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
