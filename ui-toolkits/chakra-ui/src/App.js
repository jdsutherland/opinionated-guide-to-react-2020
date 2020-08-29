import React from "react";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";

export default function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Box
        maxWidth="80%"
        width='600px'
        margin='50px auto'
        textAlign='center'
      >
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </Box>
    </ThemeProvider>
  );
}
