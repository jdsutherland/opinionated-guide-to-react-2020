import React, { useRef, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0)
  const button = useRef(null);

  const fakeClick = () => {
    button.current.click();
  };

  return (
    <>
      <button ref={button} onClick={fakeClick}>
        This button triggers a click somewhere
      </button>
      Count: <span>{count}</span>
      <button ref={button} onClick={() => setCount(count + 1)}>
        +
      </button>
    </>
  );
}
