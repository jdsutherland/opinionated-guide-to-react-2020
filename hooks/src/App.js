import React, { useState, useEffect, useCallback } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [plusOne, setPlusOne] = useState(0);

  const add1 = useCallback((x) => {
    console.log("here", x);
    return x + 1;
  }, [])

  useEffect(() => {
    setPlusOne(add1(num));
  }, [num, add1]);
  return (
    <>
      <h2>{num}</h2>
      <h3>{plusOne}</h3>
      <button onClick={() => setNum(num + 1)}>+</button>
    </>
  );
};

export default App;
