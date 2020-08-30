import React from "react";
import ReactDOM from "react-dom";
import Heading from "./components/heading";
import Button from "./components/button/";
import styled from "styled-components";

const Main = styled.main`
  width: 1200px;
  max-width: 80%;
  margin: 50px auto;
`;

const App = () => {
  return (
    <Main>
      <Heading as="h2">Welcome to Storybook</Heading>
      <Button>I am a button</Button>
    </Main>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
