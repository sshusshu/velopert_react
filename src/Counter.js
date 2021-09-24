import React, { useState } from "react";

function Counter() {
  //   const [number, setNumber] = useState(0);

  //   const onIncrease = () => {
  //     setNumber((prev) => prev + 1);
  //   };
  //   const onDecrease = () => {
  //     setNumber((prev) => prev - 1);
  //   };

  const [count, setCount] = useState(0);

  const onClick1 = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.dir(count);
  };

  const onClick2 = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    console.dir(count);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick1}>just</button>
      <button onClick={onClick2}>func</button>
    </div>
  );
}

export default Counter;
