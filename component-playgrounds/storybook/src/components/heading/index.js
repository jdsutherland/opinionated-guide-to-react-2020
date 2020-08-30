import React from "react";
import styled from "styled-components";

const HeadingComponent = styled.h1`
  font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #161515;
  padding: 0;
  margin: 0;
  color: #4f82b5;
`;

const Heading = ({ children, ...props }) => (
  <HeadingComponent {...props}>{children}</HeadingComponent>
);

export default Heading;
