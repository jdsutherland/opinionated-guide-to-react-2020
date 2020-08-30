import React, { useEffect, useState } from "react";
import './App.css';

const Name = ({ name }) => {
  useEffect(() => {
    console.log("name changed");
  }, [name]);

  return <h1> Hello {name}</h1>;
};

const App = () => {
  const [name, setName] = useState("Jane Doe");
  return (
    <div className="App">
      <Name name={name} />
      <h2>Change the name</h2>
      <button onClick={() => setName("CodeSandbox")}>CodeSandbox</button>
      <button onClick={() => setName("John Doe")}>John Doe</button>
    </div>
  );
};

export default App;
