import React from "react";
import {
  ThemeProvider,
  CSSReset,
  Box,
  ColorModeProvider,
} from "@chakra-ui/core";
import Modal from './components/Modal';
import Dropdown from './components/Dropdown';

export default function App() {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <>
          <CSSReset />

          <Box
            width={200}
            height={200}
            margin="30px auto"
            backgroundColor="tomato"
            borderRadius="50%"
            borderColor="gray"
            borderWidth={10}
          />
          <Box
            maxWidth="80%"
            width="600px"
            margin="50px auto"
            textAlign="center"
          >
            <Dropdown />
            <Modal />
          </Box>
        </>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
