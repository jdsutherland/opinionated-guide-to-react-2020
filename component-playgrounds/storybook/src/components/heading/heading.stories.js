import React from "react";
import Heading from "./";

export default {
  title: "components/Heading",
  component: Heading,
};

export const H1 = () => <Heading>Hello Heading</Heading>;
export const H2 = () => <Heading as="h2">Hello Heading</Heading>;
export const H3 = () => <Heading as="h3">Hello Heading</Heading>;
export const H4 = () => <Heading as="h4">Hello Heading</Heading>;
export const H5 = () => <Heading as="h5">Hello Heading</Heading>;
export const H6 = () => <Heading as="h6">Hello Heading</Heading>;
