import React from "react";
import Button from "./";

export default {
  title: "components/Button",
  component: Button,
};

export const basic = () => <Button>Hello Button</Button>;
export const emoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
export const small = () => <Button small>Hello Small Button</Button>;
