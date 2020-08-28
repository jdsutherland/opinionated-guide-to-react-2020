import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme, Style } from "./utils/styles";

function App() {
  const [word, setWord] = useState("");
  return (
    <ThemeProvider theme={theme}>
      <>
        <Style />
        <div className="App">
          <h1>Write "React"</h1>
          <input value={word} onChange={(e) => setWord(e.target.value)} />
          <h2 react={word.toLowerCase() === "react"}>{word}</h2>
        </div>
      </>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
