import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import App from "./App";

const client = new ApolloClient({
  uri: "https://6qvmj.sse.codesandbox.io/",
});

const Main = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
