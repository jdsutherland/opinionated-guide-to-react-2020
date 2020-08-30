import React from "react";
import { Modal, Box, Select } from "@chakra-ui/core";

const Dropdown = () => {
  return (
    <>
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
        <Modal />
      </Box>
    </>
  )
}

export default Dropdown
