import React from "react";
import styled, { css } from "styled-components";

const ButtonComponent = styled.button`
  padding: 8px 12px;
  border: none;
  background: #319795;
  color: white;

  ${(props) =>
    props.small &&
    css`
      padding: 4px 8px;
    `}
`;

const Button = ({ children, ...props }) => (
  <ButtonComponent {...props}>{children}</ButtonComponent>
);

export default Button;
