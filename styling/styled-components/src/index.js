import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider, css } from "styled-components/macro";
import { theme, Style } from "./utils/styles";

const Heading = styled.h2`
  background: black;
  padding: 8px 12px;
  color: ${(props) => props.theme.colors.white};

  ${({ react, theme }) =>
    react &&
    css`
      background: ${theme.colors.white};
      color: black;
    `}
`;

function App() {
  const [word, setWord] = useState("");
  return (
    <ThemeProvider theme={theme}>
      <>
        <Style />
        <div className="App">
          <h1>Write "React"</h1>
          <input
            css={{
              border: 'none',
              padding: 8,
            }}
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <Heading react={word.toLowerCase() === "react"}>{word}</Heading>
        </div>
      </>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
