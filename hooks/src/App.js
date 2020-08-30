import React, { useRef, useEffect } from "react";

export default function App() {
  const button = useRef(null);

  useEffect(() => {
    button.current.click();
  }, []);

  return (
    <button ref={button} onClick={() => alert('clicked')}>
      A button
    </button>
  );
}
