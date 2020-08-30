import React, { useState, useMemo } from "react";

function fibonacci(x) {
  console.log("here");
  if (x <= 0) return 0;
  if (x === 1) return 1;
  return fibonacci(x - 1) + fibonacci(x - 2);
}

const App = () => {
  const [number, setNumber] = useState(10);
  const [isGreen, setIsGreen] = useState(true);
  const fib = useMemo(() => fibonacci(number), [number]);

  return (
    <>
      <button
        onClick={() => setIsGreen(!isGreen)}
        style={{ background: isGreen ? "#01FF70" : "#B10DC9" }}
      >
        useMemo Example
      </button>
      <h2>
        Fibonacci of {number} is {fib}
      </h2>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </>
  );
};

export default App;
