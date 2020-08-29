import React from "react";
import { ThemeProvider, CSSReset, Box, Select } from "@chakra-ui/core";

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
        <Select
          placeholder='Berlin Teams'
          onChange={event => console.log(event.target.value)}
        >
          <option value="union">Union Berlin</option>
          <option value="hertha">Hertha Berlin</option>
        </Select>
      </Box>
    </ThemeProvider>
  );
}
